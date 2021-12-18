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

tsConfig.rules['filenames/match-exported'] = 'off';

const controllerConfig = {
  ...tsConfig,
  files: ['**/*.controller.ts'],
};

const entityConfig = {
  ...tsConfig,
  files: ['**/*.entity.ts'],
  rules: {
    ...tsConfig.rules,
    camel_case: 'off',
  },
};

const moduleConfig = {
  ...tsConfig,
  files: ['**/*.module.ts'],
  rules: {
    ...tsConfig.rules,
    '@typescript-eslint/no-extraneous-class': 'off',
  },
};

const serviceConfig = {
  ...tsConfig,
  files: ['**/*.service.ts'],
  rules: {
    ...tsConfig.rules,
    'filenames/match-exported': 'off',
  },
};

module.exports = {
  ...defaultConfig,
  overrides: [...defaultConfig.overrides, controllerConfig, entityConfig, moduleConfig, serviceConfig],
};
