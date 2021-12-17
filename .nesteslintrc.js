/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const lodash = require('lodash');

const defaultConfig = require('./index');

const tsConfig = lodash.first(defaultConfig.overrides.filter(o => o.files && o.files.includes('**/*.ts'))) || {
  rules: {},
};

const nestConfig = {
  ...tsConfig,
  rules: {
    ...tsConfig.rules,
    'filenames/match-exported': 'off',
  },
};

const controllerConfig = {
  ...nestConfig,
  files: ['**/*.controller.ts'],
};

const entityConfig = {
  ...nestConfig,
  files: ['**/*.entity.ts'],
  rules: {
    ...nestConfig.rules,
    camel_case: 'off',
  },
};

const moduleConfig = {
  ...nestConfig,
  files: ['**/*.module.ts'],
  rules: {
    ...nestConfig.rules,
    '@typescript-eslint/no-extraneous-class': 'off',
  },
};

const serviceConfig = {
  ...nestConfig,
  files: ['**/*.service.ts'],
  rules: {
    ...nestConfig.rules,
    'filenames/match-exported': 'off',
  },
};

console.log([...defaultConfig.overrides, controllerConfig, entityConfig, moduleConfig, nestConfig, serviceConfig]);

module.exports = {
  ...defaultConfig,
  overrides: [...defaultConfig.overrides, controllerConfig, entityConfig, moduleConfig, serviceConfig],
};
