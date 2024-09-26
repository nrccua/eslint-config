# ESLint Config

<!-- markdownlint-disable line-length -->

[![Version](https://img.shields.io/npm/v/@encoura/eslint-config)](https://www.npmjs.com/package/@encoura/eslint-config) [![Build Status](https://app.travis-ci.com/nrrccua/eslint-config.svg?branch=master)](https://app.travis-ci.com/nrrccua/eslint-config) [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/nrrccua/eslint-config/blob/master/LICENSE) [![Downloads](https://img.shields.io/npm/dw/@encoura/eslint-config?color=orange)](https://www.npmjs.com/package/@encoura/eslint-config)

<!-- markdownlint-enable line-length -->

ACT's preferred configs for TypeScript, Prettier, ESLint, CommitLint, and
MarkdownLint.

## Getting Started

Install this package, [husky](https://github.com/typicode/husky), and
[lint-staged](https://github.com/okonet/lint-staged) as dev dependencies:

```shell
npm install --save-dev @encoura/eslint-config husky lint-staged
```

Configure husky by adding the following to your `package.json` file:

```json
...
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
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

Next, add the following to your `package.json` file so that CommitLint will
check for infractions in your commit messages every time you create a new
commit:

```json
...
"husky": {
  "hooks": {
    ...
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    ...
  }
},
...
```

## Configure ESLint

To configure [ESLint](https://eslint.org/), add the following to your
`package.json` file. This will allow ESLint to discover the configuration this
repository provides from within your `node_modules` folder, and will check
your `*.js`, `*.ts`, and `*.tsx` files for infractions every time you create a
new commit:

```json
...
"eslintConfig": {
  ...
  "extends": [
    ...
    "@encoura/eslint-config",
    ...
  ],
  ...
},
...
"lint-staged": {
  ...
  "*.{js,ts,tsx}": "eslint",
  ...
},
...
```

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

To configure [prettier](https://prettier.io/), create a `prettier.config.js`
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
  "*.{js,json,md,ts,tsx}": [
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

Upon merge, [`semantic-release`](https://github.com/semantic-release/semantic-release)
will scan the `main` branch for new commits and will use those commits to choose
a new version for this library and write automated changelog documentation. Thus,
it is important that we accurately capture what type of development we are
doing via our commit messages.

- For changes to documentation, use the `docs` tag:

```bash
git commit -m "docs: Updated documentation to clarify XYZ"
```

- For patches, use `fix`:

```bash
git commit -m "fix: Updated an eslint rule to fix false positives in downstream projects"
```

- For new functionality, use `feat`:

```bash
git commit -m "feat: Added new eslint rules around async/await and promises"
```
