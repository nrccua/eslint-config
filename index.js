/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const prettierConfig = require('./.prettierrc');

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
    'import/extensions': ['error', 'never'],
    'lodash/preferred-alias': 'off',
    'max-len': [
      'error',
      {
        code: prettierConfig.printWidth,
      },
    ],
    'no-console': 'error',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-useless-constructor': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
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
    '@typescript-eslint/member-delimiter-style': 'error',
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

module.exports = { ...baseConfig, overrides: [tsConfig] };
