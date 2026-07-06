# AGENTS.md

## Scope

These instructions apply to the whole repo. Prefer existing patterns, keep
changes focused, and treat public package compatibility and OSS readability as
part of the work.

## Before Editing

- Use the Node version in `.nvmrc`; run `nvm use` before `npm` commands.
- Inspect nearby config exports, examples, README guidance, package metadata,
  and generated publish output before changing an area.
- Use `rg` to find related rules, config factories, examples, scripts, and docs.
- Keep public-facing text friendly and self-contained. If context came from a
  private discussion, summarize it as maintainer context rather than naming
  private systems, links, tickets, or consumers.

## What This Package Is

- This is the public package `@encoura/eslint-config`.
- It publishes shared configuration for ESLint, Prettier, CommitLint,
  MarkdownLint, and TypeScript.
- The main ESLint export is a flat-config factory for front-end projects.
- The Nest export derives from the main config and strips front-end-specific
  settings before adding back-end file-pattern overrides.
- Package changes reach users only after a release is published and consuming
  projects upgrade to that release.

## OSS Boundary

- Keep commits, branch names, PR titles, PR bodies, changelog-facing text, and
  public docs free of non-public references, private project names, private
  tracking IDs, private links, and private implementation context.
- Avoid naming specific consuming applications in repo docs or PR templates.
  Describe impact in generic package-consumer terms instead.
- Do not commit secrets, local config values, service tokens, licensed assets,
  screenshots containing private data, or other non-public artifacts.

## Commands

- Install: `npm install`
- Build package output: `npm run build`
- Broad validation: `npm test`
- JavaScript lint: `npm run test:lint:js`
- TypeScript lint: `npm run test:lint:ts`
- Nest example lint: `npm run test:lint:nest`
- Markdown lint: `npm run test:lint:md`
- Prettier check: `npm run test:prettier`
- TypeScript config check: `npm run test:tsconfig`
- Unit tests: `npm run test:unit`

Prefer focused validation first, then broaden when shared rules, published
exports, examples, package metadata, or release behavior changes.

## Repo Map

- `src/index.js`: main ESLint flat-config factory and shared front-end rules.
- `src/nest.js`: Nest-oriented ESLint config derived from the main factory.
- `src/commitlint.config.js`: published CommitLint configuration.
- `src/prettier.config.js`: published Prettier configuration.
- `src/markdownlint.config.json`: published MarkdownLint configuration.
- `src/tsconfig.json`: published TypeScript base configuration.
- `examples`: local examples used by lint and unit-test coverage.
- `eslint.config.js` and `eslint.nest.config.js`: repo-local validation configs
  that exercise the published config factories.
- `dist`: generated publish output. Do not hand-edit local builds.

## Config And Package Boundaries

- Preserve the exported module paths documented in the README unless there is an
  explicit breaking-change plan.
- Keep the main config broadly useful for React and TypeScript consumers without
  assuming a specific private application, route structure, test runner, or
  product workflow.
- Keep the Nest export focused on back-end TypeScript linting by removing
  front-end plugins, rules, and settings from the shared base before applying
  Nest-specific overrides.
- When adding a rule or plugin, include a repo-local example or focused test when
  practical so future upgrades can catch regressions.
- Be careful with dependency and peer-dependency changes. This package is shared
  tooling, so install-time peer warnings and transitive assumptions can affect
  many consumers.

## Public API And Published Output

- Published files are built into `dist`; run `npm run build` when validating
  changes that affect package contents.
- The package `main` points at the root config export, and documented consumers
  import additional published config files by path.
- Keep README examples aligned with the actual exported factories and package
  contents.
- Do not edit generated `dist` files by hand. Change source files and rebuild
  when generated output needs verification.

## Release And PRs

- This repo uses squash merges for PRs. The squash commit title drives
  semantic-release for patch and minor releases.
- Keep the release-impact rules in
  [`README.md#release-process`](./README.md#release-process) as the source of
  truth.
- Use release-triggering PR title prefixes only when the package should publish
  a consumer-facing release. Docs, tests, examples, and tooling-only changes
  should use non-runtime prefixes such as `docs:`, `test:`, `build:`, or
  `chore:`.
- Major releases need a `BREAKING CHANGE:` footer in a commit message; see the
  README release process before preparing a breaking PR.
- Use `.github/pull_request_template.md`; call out consumer impact, validation,
  skipped checks, and any needed package testing or release plan.

## Avoid

- Do not commit `node_modules/`, local `.env`, local `.npmrc`, logs, tarballs,
  screenshots, videos, or hand-edited generated output.
- Do not mention private planning tools, private communication tools, internal
  ticket IDs, or specific private consumers in public repo materials.
- Do not change release workflows, semantic-release config, dependency ranges, or
  package metadata unless the task requires it.
