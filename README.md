# ESLint Config

Encoura's preferred configs for TypeScript, Prettier, ESLint, CommitLint, and
MarkdownLint.

## Getting Started

Install this package, [husky](https://github.com/typicode/husky), and
[lint-staged](https://github.com/okonet/lint-staged) as dev dependencies:

```shell
npm install --save-dev git+https://github.com/nrccua/eslint-config.git husky lint-staged
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

By default the Encoura commitlint expects a commit message in the following format:

`[XXX-###]: Subject` where XXX-### is a jira ticket id, e.g., `E4E-1`

The commit message may also be in the form of git's standard merge commit format.

## Configure ESLint

To configure [ESLint](https://eslint.org/), add the following to your
`package.json` file. This will allow ESLint to discover the configuration this
repository provides from within your `node_modules` folder, and will check
your `*.js`, `*.ts`, and `*.tsx` files for infractions every time you create a
new commit:

To configure [prettier](https://prettier.io/), create a `.prettierrc.js`
file in the root of your project that contains the following:

```js
module.exports = {
  extends: ['@encoura/eslint-config']
  ...
  // Add any custom rules/plugins/configuration here
}
```

```json
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

To configure [prettier](https://prettier.io/), create a `.prettierrc.js`
file in the root of your project that contains the following:

```js
module.exports = require('@encoura/eslint-config/.prettierrc');
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

## Configure Jest

To configure [Jest](https://jestjs.io/), create a `jest.config.js`
file in the root of your project that contains the following:

```js
const defaultConfig = require('@encoura/eslint-config/jest.config');

module.export = {
  ...defaultConfig,
  // Extra project specific jest config here...
} 
```

This will allow Jest to discover the configuration this repository
provides from within your `node_modules` folder.

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

| Script                  | Description                                                           |
|:----------------------- |:--------------------------------------------------------------------- |
| npm test                | Run all tests.                                                        |
| npm run release         | Publish a new release of the ESLint Config.                           |
