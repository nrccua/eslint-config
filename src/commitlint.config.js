/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerCorrespondence: ['ticket', 'subject'],
      headerPattern: /^(\[[A-Z0-9]*-[0-9]*\]):\s(.*)$/,
    },
  },
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-min-length': [2, 'always', 10],
    'type-empty': [0, 'never'],
  },
};
