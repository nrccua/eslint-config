const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, writeFileSync, rmSync, readFileSync, readdirSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const compatibilityPackages = require('../scripts/compat-packages.json');
const originalRules = Object.fromEntries(
  ['import', 'react', 'jsx-a11y'].map(name => [name, Object.keys(require(`eslint-plugin-${name}`).rules).sort()]),
);

test('bundled implementations are unchanged; only declared peer ranges are patched', () => {
  const patched = new Set(compatibilityPackages.map(name => `${name}/package.json`));
  for (const file of readdirSync('dist/node_modules', { recursive: true, withFileTypes: true })) {
    if (!file.isFile()) continue;
    const output = path.join(file.parentPath, file.name);
    const relative = path.relative('dist/node_modules', output);
    const installed = path.join('node_modules', relative);
    if (!patched.has(relative)) {
      assert.deepEqual(readFileSync(output), readFileSync(installed), relative);
      continue;
    }
    const original = JSON.parse(readFileSync(installed, 'utf8'));
    const built = JSON.parse(readFileSync(output, 'utf8'));
    assert.equal(built.peerDependencies.eslint, `${original.peerDependencies.eslint} || ^10.0.0`);
    if (built.name === 'eslint-config-airbnb') {
      assert.equal(
        built.peerDependencies['eslint-plugin-react-hooks'],
        `${original.peerDependencies['eslint-plugin-react-hooks']} || ^7.1.1`,
      );
    }
    built.peerDependencies = original.peerDependencies;
    assert.deepEqual(built, original, relative);
  }
});

// Exercise the published tarball outside the repository: root overrides and
// existing node_modules must not influence consumer dependency resolution.
test('published factories install and lint with strict peer resolution', { timeout: 180000 }, () => {
  const cwd = mkdtempSync(path.join(tmpdir(), 'eslint-config-consumer-'));
  const run = (command, args) => execFileSync(command, args, { cwd, encoding: 'utf8', stdio: 'pipe' });
  try {
    const packed = JSON.parse(run('npm', ['pack', path.resolve('dist'), '--json']));
    writeFileSync(path.join(cwd, 'package.json'), JSON.stringify({ private: true }));
    run('npm', [
      'install',
      '--strict-peer-deps',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      `./${packed[0].filename}`,
      'eslint@^10.11.0',
      'typescript@~6.0.3',
    ]);
    run('npm', ['ls', '--all']);
    if (process.env.AUDIT_PACKED_PACKAGE === '1') {
      const audit = JSON.parse(run('npm', ['audit', '--json']));
      assert.equal(audit.metadata.vulnerabilities.total, 0, 'packed consumer audit');
    }
    writeFileSync(
      path.join(cwd, 'check.cjs'),
      `
      const assert = require('node:assert/strict');
      const { ESLint } = require('eslint');
      const createConfig = require('@encoura/eslint-config');
      const createNestConfig = require('@encoura/eslint-config/nest');
      const originalRules = ${JSON.stringify(originalRules)};
      (async () => {
        for (const factory of [createConfig, createNestConfig]) {
          const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: factory({ typescriptProjects: [] }) });
          const configured = new ESLint({ overrideConfigFile: true, overrideConfig: [
            ...factory({ typescriptProjects: [] }),
            { settings: { 'import/core-modules': ['virtual-import'] } },
          ] });
          const [imports] = await configured.lintText("import value from 'virtual-import'; export default value;", { filePath: 'imports.js' });
          assert(!imports.messages.some(message => message.ruleId === 'import/no-unresolved'));
          assert(imports.messages.every(message => !message.fatal));
          const config = await eslint.calculateConfigForFile('example.js');
          assert.equal(config.rules.eqeqeq[0], 2);
          for (const [name, names] of Object.entries(originalRules)) {
            if (factory === createNestConfig && name !== 'import') continue;
            assert.deepEqual(Object.keys(config.plugins[name].rules).sort(), names);
          }
          const ruleOverrides = { 'import/enforce-node-protocol-usage': ['error', 'always'] };
          if (factory === createConfig) Object.assign(ruleOverrides, {
            'jsx-a11y/accessible-emoji': 'error',
            'jsx-a11y/label-has-for': 'error',
            'jsx-a11y/no-onchange': 'error',
          });
          const extended = new ESLint({ overrideConfigFile: true, overrideConfig: factory({
            typescriptProjects: [], overrides: [{ rules: ruleOverrides }],
          }) });
          await extended.lintText('export const value = 1;', { filePath: 'overrides.js' });
          assert.equal(config.rules['import/no-mutable-exports'][0], 2);
          const [result] = await eslint.lintText('var value = 1;\\nif (value == 2) { console.log(value); }\\n', { filePath: 'example.js' });
          assert(result.messages.some(message => message.ruleId === 'eqeqeq'));
          assert(result.messages.every(message => !message.fatal));
          if (factory === createNestConfig) {
            assert(!Object.keys(config.rules).some(name => /^(react|jsx-a11y|@next|storybook)/.test(name)));
          } else {
            assert.equal(config.rules['react/jsx-key'][0], 2);
            const jsx = new ESLint({ overrideConfigFile: true, overrideConfig: [
              ...factory({ typescriptProjects: [] }), { files: ['**/*.jsx'] },
            ] });
            const [render] = await jsx.lintText('export const images = [<img />];', { filePath: 'example.jsx' });
            assert(render.messages.some(message => message.ruleId === 'react/jsx-key'));
            assert(render.messages.some(message => message.ruleId === 'jsx-a11y/alt-text'));
            assert(render.messages.every(message => !message.fatal));
          }
        }
      })().catch(error => { console.error(error); process.exitCode = 1; });
    `,
    );
    run(process.execPath, ['check.cjs']);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});
