# ESLint Config

Encoura's preferred configs for TypeScript, Prettier, ESLint, CommitLint, and
MarkdownLint.

## Getting Started

Install this package, [ESLint](https://eslint.org/),
[husky](https://github.com/typicode/husky), and
[lint-staged](https://github.com/okonet/lint-staged) as dev dependencies:

```shell
npm install --save-dev @encoura/eslint-config eslint@^10 husky lint-staged
```

Configure husky by adding the following to your `package.json` file:

```json
...
"scripts": {
  ...
  "prepare": "husky",
  ...
},
...
```

## Configure CommitLint

To configure [CommitLint](https://github.com/marionebl/commitlint), create a
`commitlint.config.js` file in the root of your project that contains the
following:

```js
module.exports = require('@encoura/eslint-config/commitlint.config');
```

This will allow CommitLint to discover the configuration this repository
provides from within your `node_modules` folder.

By default the Encoura commitlint expects a commit message in the following format:

`[XXX-###]: Subject` where XXX-### is a jira ticket id, e.g., `E4E-1`

The commit message may also be in the form of git's standard merge commit format.

## Configure ESLint

To configure [ESLint](https://eslint.org/), add the following to your
`eslint.config.js` and `package.json` files. This package supports ESLint 10's
flat config system. This repository develops and validates the config on Node 24.

Some legacy presets and plugins still publish stale ESLint peer ranges. This
package keeps those presets behind ESLint's flat-compatibility shims to preserve
existing lint behavior, so npm may print peer override warnings during install.

```js
const createConfig = require('@encoura/eslint-config');

module.exports = createConfig({
  nextRootDir: __dirname,
  resolverProject: ['tsconfig.json'],
  tsconfigRootDir: __dirname,
});
```

For back-end (Nest.js) projects:

```js
const createConfig = require('@encoura/eslint-config/nest');

module.exports = createConfig({
  resolverProject: ['tsconfig.json'],
  tsconfigRootDir: __dirname,
});
```

```json
...
"lint-staged": {
  ...
  "*.{js,jsx,ts,tsx}": "eslint",
  ...
},
...
```

### Breaking Changes In v4

- ESLint config consumers must use ESLint 10 flat config. Legacy `.eslintrc`
  `extends: ['@encoura/eslint-config']` and
  `extends: ['@encoura/eslint-config/nest']` usage is no longer supported.
  Create an `eslint.config.js` file and call the exported config factory instead.
- Install `eslint@^10` directly in consuming projects. This package declares
  ESLint 10 as a peer so the project-level `eslint` CLI resolves to the expected
  major version.
- The published `jest.config.js` export and Jest-related dependencies were
  removed. Projects that imported
  `@encoura/eslint-config/jest.config` should own their Jest or Vitest config
  locally.
- Jest-specific test linting is no longer enabled by this shared ESLint config.
  Test files still receive the shared TypeScript/React overrides, but Vitest
  projects no longer inherit Jest rules.
- `eslint-plugin-disable` is no longer bundled. The shared config did not enable
  any `disable/*` rules; projects that used that package transitively should add
  their own dependency.

## Configure MarkdownLint

To configure [MarkdownLint](https://github.com/DavidAnson/markdownlint), add the
following to your `package.json` file. This will allow MarkdownLint to discover
the configuration this repository provides from within your `node_modules`
folder, and will check your `*.md` files for infractions every time you create
a new commit:

```json
...
"lint-staged": {
  ...
  "*.{md}": "markdownlint --config node_modules/@encoura/eslint-config/markdownlint.config.json",
  ...
},
...
```

## Configure Prettier

To configure [prettier](https://prettier.io/), create a `.prettierrc.js`
file in the root of your project that contains the following:

```js
module.exports = require('@encoura/eslint-config/prettier.config');
```

This will allow Prettier to discover the configuration this repository
provides from within your `node_modules` folder.

Next, add the following to your `package.json` file so that prettier will check
your files for infractions every time you create a new commit:

```json
...
"lint-staged": {
  ...
  "*.{js,jsx,json,md,ts,tsx}": [
    "prettier --write",
    "git add"
  ]
  ...
},
...
```

## Configure TypeScript

To configure [TypeScript](https://www.typescriptlang.org/), add the following
to your `tsconfig.json` file. This will allow TypeScript to discover the
configuration this repository provides from within your `node_modules` folder:

```json
...
"extends": "node_modules/@encoura/eslint-config/tsconfig.json",
...
```

## Local Development

### npm Scripts

There are several npm scripts at your disposal during local development.
Here are some of the more important ones:

| Script   | Description    |
| :------- | :------------- |
| npm test | Run all tests. |

### Release Process

When your code changes are ready, it's time to publish a new patch, minor, or
major release.

1. Make a PR (or mark your draft PR as ready for review).

2. Annotate your PR with the necessary context to let Semantic Release know if
   this should yield a new patch, minor, or major release:
   - If you expect the merging of your PR to result in a new _patch_ release,
     start your PR title with `fix:`.
   - If you expect the merging of your PR to result in a new _minor_ release,
     start your PR title with `feat:`.
   - If you expect the merging of your PR to result in a new _major_ release,
     see #3 below for details.
   - If you expect the merging of your PR to skip the creation of a new release,
     you can start your PR title with `build:` (for build changes),
     `chore:` (for basic maintenance), `docs:` (for documentation updates),
     or simply do not use any of the above keyword prefixes.

3. If the pull request should create a new major version release, the string
   `BREAKING CHANGE:` must be included in at least one commit message's
   **footer** ([see docs](https://semantic-release.gitbook.io/semantic-release#commit-message-format))
   — Semantic Release's commit analyzer does **not** use the PR title in
   determining major releases.

   You can either manually add `BREAKING CHANGE:` to the commit footer
   after pressing "Merge Pull Request"/"Squash and Merge" in your PR (in the
   "optional extended description" field). Alternatively, if you're merging the
   PR by creating a new merge commit, ensure that at least one of the source
   commits' messages has `BREAKING CHANGE:` in its footer. Note that to
   accomplish this you may need to commit with the `--no-verify` flag to bypass
   commitlint.

4. Once your PR is merged, Semantic Release will pick it up and initiate the
   automated release process. If it detects that it should create a release
   (based on the above), it will. Otherwise, it won't!
