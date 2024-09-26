/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      options: {
        printWidth: 160,
      },
    },
  ],
  printWidth: 120,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
