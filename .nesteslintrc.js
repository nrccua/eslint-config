/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const defaultConfig = require('./index');

const tsConfig = defaultConfig.overrides.filter(o => o.files === ['**/*.ts', '**/*.tsx'])[0];

const moduleConfig = {
    ...tsConfig,
    files: ['**/*.module.ts'],
    rules: {
        ...tsConfig.rules,
        '@typescript-eslint/no-extraneous-class': 'off',
    },
};

const entityConfig = {
    ...tsConfig,
    files: ['**/*.entity.ts'],
    rules: {
        ...tsConfig.rules,
        camel_case: 'off',
    },
};

module.exports = { ...defaultConfig, overrides: [...defaultConfig.overrides, moduleConfig, entityConfig] };
