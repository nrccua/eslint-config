/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const baseConfig = require('./index');

const controllerConfig = {
  files: ['**/*.controller.ts'],
};

const entityConfig = {
  files: ['**/*.entity.ts'],
  rules: {
    camel_case: 'off',
  },
};

const moduleConfig = {
  files: ['**/*.module.ts'],
  rules: {
    '@typescript-eslint/no-extraneous-class': 'off',
  },
};

const serviceConfig = {
  files: ['**/*.service.ts'],
  rules: {
    'filenames/match-exported': 'off',
  },
};

module.exports = {
  ...baseConfig,
  overrides: [...baseConfig.overrides, controllerConfig, entityConfig, moduleConfig, serviceConfig],
  rules: {
    ...baseConfig.rules,
    'filenames/match-exported': 'off',
  },
};
