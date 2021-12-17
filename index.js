/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const prettierConfig = require('./.prettierrc');

const overridePrintWidth =
  prettierConfig && prettierConfig.overrides && prettierConfig.overrides.length > 0
    ? Math.max(...prettierConfig.overrides.map(o => o.options.printWidth))
    : 0;
const printWidth = Math.max(prettierConfig.printWidth, overridePrintWidth);

const baseConfig = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['node_modules/**'],
  plugins: ['prettier'],
  rules: {
    'filenames/match-exported': ['warn', [null, 'pascal', 'camel']],
    'import/extensions': ['error', 'never'],
    'lodash/prefer-lodash-method': 'off',
    'lodash/preferred-alias': 'off',
    'max-len': [
      'error',
      {
        code: printWidth,
      },
    ],
    'no-console': 'error',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-useless-constructor': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/function-component-definition': 'off', // Allows const defined components
    'react/no-invalid-html-attribute': 'off', // Allows rel values in link tags such as apple-touch-icon
  },
};

const tsConfig = {
  extends: [
    ...baseConfig.extends,
    '@actinc/eslint-config',
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
    '@typescript-eslint/member-delimiter-style': 'error',
    // Emulate deprecated interface-name-prefix rule
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn', // Change this to 'error' in the future
    '@typescript-eslint/no-unsafe-call': 'warn', // Change this to 'error' in the future
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: '@**',
            group: 'external',
          },
          {
            pattern: 'next/**',
            group: 'external',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'no-throw-literal': 'off', // Rely on @typescript-eslint/no-throw-literal instead
    'no-useless-constructor': 'off', // Rely on @typescript-eslint/no-useless-constructor instead
  },
};

const testsConfig = {
  ...tsConfig,
  files: ['test/**', '*.test.ts', '*.spec.ts'],
  plugins: ['jest'],
  rules: {
    ...tsConfig.rules,
    '@typescript-eslint/unbound-method': 'off',
    'jest/unbound-method': 'error',
  },
};

module.exports = { ...baseConfig, overrides: [tsConfig, testsConfig] };
