/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const prettierConfig = require('./prettier.config');

const overridePrintWidth =
  prettierConfig && prettierConfig.overrides && prettierConfig.overrides.length > 0
    ? Math.max(...prettierConfig.overrides.map(o => o.options.printWidth))
    : 0;
const printWidth = Math.max(prettierConfig.printWidth, overridePrintWidth);

const baseConfig = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@next/next/recommended',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:lodash/recommended',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['node_modules/**'],
  plugins: [
    'disable',
    'filenames',
    'import',
    'jsx-a11y',
    'lodash',
    'new-with-error',
    'no-loops',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'security',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    '@next/next/no-html-link-for-pages': ['warn', './src'],
    '@next/next/no-img-element': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'filenames/match-exported': ['warn', [null, 'pascal', 'camel']],
    'filenames/match-regex': 'off',
    'function-paren-newline': 'off',
    'import/extensions': ['error', 'never', { json: 'always', svg: 'always' }],
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.*', '**/*.stories.*', '**/*.test.*', '**/test/**/*.*'],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/order': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'lodash/import-scope': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/preferred-alias': 'off',
    'max-len': [
      'error',
      {
        code: printWidth,
      },
    ],
    'new-with-error/new-with-error': 'error',
    'no-console': 'error',
    'no-loops/no-loops': 'error',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__DEV__', '__ENV__', '__typename', '_cachedRowCount', '_dataBlob', '_ensureIndex', '_id', '_typename'],
        allowAfterThis: true,
      },
    ],
    'no-use-before-define': 'off',
    'no-useless-constructor': 'error',
    'prefer-destructuring': [
      'off',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    'prettier/prettier': 'error',
    'promise/always-return': 'error',
    'promise/avoid-new': 'warn',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': 'warn',
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/no-deprecated': 'error',
    'react/no-invalid-html-attribute': 'off',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-render-return': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'childContextTypes',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          'static-methods': [
            'displayName',
            'props',
            'state',
            'contextType',
            'contextTypes',
            'defaultProps',
            'getInitialProps',
            'navigationOptions',
          ],
        },
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-unsafe-regex': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
    next: {},
  },
};

const typescriptConfig = {
  extends: [
    ...baseConfig.extends,
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  files: ['**/*.ts', '**/*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    ...baseConfig.rules,
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        custom: {
          match: true,
          regex: '^I[A-Z]',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn', // Change this to 'error' in the future
    '@typescript-eslint/no-unsafe-call': 'warn', // Change this to 'error' in the future
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '~/**',
          },
          {
            group: 'external',
            pattern: '@**',
          },
          {
            group: 'external',
            pattern: 'next/**',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'no-throw-literal': 'off', // Rely on @typescript-eslint/no-throw-literal instead
    'no-useless-constructor': 'off', // Rely on @typescript-eslint/no-useless-constructor instead
  },
};

const testConfig = {
  env: {
    'jest/globals': true,
  },
  extends: ['plugin:jest/recommended'],
  files: ['test/**', '*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
  plugins: ['jest'],
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    'jest/unbound-method': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};

const storybookConfig = {
  files: ['./**/*.stories.tsx'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    'storybook/story-exports': 'off',
  },
};

module.exports = {
  ...baseConfig,
  overrides: [typescriptConfig, testConfig, storybookConfig],
};
