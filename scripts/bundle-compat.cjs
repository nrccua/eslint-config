const { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } = require('node:fs');
const path = require('node:path');
const compatibilityPackages = require('./compat-packages.json');

const root = path.resolve(__dirname, '..');
const installedModules = path.join(root, 'node_modules');
const copied = new Set();

function resolvePackage(name, from) {
  for (let directory = from; directory !== path.dirname(directory); directory = path.dirname(directory)) {
    const candidate = path.join(directory, 'node_modules', name);
    if (existsSync(path.join(candidate, 'package.json'))) return candidate;
  }
  return undefined;
}

// Copy the locked production dependency closure, retaining npm's directory
// layout, original implementations, and licenses. Peer dependencies continue
// to be provided by the consuming project and this config's other dependencies.
function bundle(directory) {
  if (copied.has(directory)) return;
  const relative = path.relative(installedModules, directory);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Expected an installed package inside node_modules: ${directory}`);
  }
  copied.add(directory);
  const destination = path.join(root, 'dist', 'node_modules', relative);
  mkdirSync(path.dirname(destination), { recursive: true });
  cpSync(directory, destination, {
    recursive: true,
    filter: source => source === directory || path.basename(source) !== 'node_modules',
  });
  const manifest = JSON.parse(readFileSync(path.join(directory, 'package.json'), 'utf8'));
  for (const name of Object.keys({ ...manifest.dependencies, ...manifest.optionalDependencies })) {
    const dependency = resolvePackage(name, directory);
    if (dependency) bundle(dependency);
    else if (!Object.hasOwn(manifest.optionalDependencies ?? {}, name)) {
      throw new Error(`Missing dependency ${name} required by ${manifest.name}; run npm ci first`);
    }
  }
}

for (const name of compatibilityPackages) {
  const directory = resolvePackage(name, root);
  if (!directory) throw new Error(`Missing ${name}; run npm ci first`);
  bundle(directory);
  const file = path.join(root, 'dist', 'node_modules', name, 'package.json');
  const dependency = JSON.parse(readFileSync(file, 'utf8'));
  dependency.peerDependencies.eslint += ' || ^10.0.0';
  if (name === 'eslint-config-airbnb') {
    dependency.peerDependencies['eslint-plugin-react-hooks'] += ' || ^7.1.1';
  }
  writeFileSync(file, `${JSON.stringify(dependency, null, 2)}\n`);
}

// Bundles belong only in the artifact: adding them to the development manifest
// causes npm ci to misresolve the overridden legacy peer dependencies.
const outputManifestPath = path.join(root, 'dist', 'package.json');
const outputManifest = JSON.parse(readFileSync(outputManifestPath, 'utf8'));
outputManifest.bundleDependencies = compatibilityPackages;
writeFileSync(outputManifestPath, `${JSON.stringify(outputManifest, null, 2)}\n`);
