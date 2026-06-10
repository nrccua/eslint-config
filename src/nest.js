/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const createBaseConfig = require('./index');

const frontendSettings = ['@next/next', 'jsx-a11y', 'next', 'react', 'storybook'];

const hasFrontendSetting = value => frontendSettings.some(setting => value.toLowerCase().includes(setting));

function stripFrontendSettings(config) {
  const plugins = Object.fromEntries(
    Object.entries(config.plugins ?? {}).filter(([name]) => !hasFrontendSetting(name)),
  );
  const rules = Object.fromEntries(Object.entries(config.rules ?? {}).filter(([name]) => !hasFrontendSetting(name)));

  return {
    ...config,
    ...(config.plugins ? { plugins } : {}),
    ...(config.rules ? { rules } : {}),
    settings: {
      ...config.settings,
      next: undefined,
    },
  };
}

const backendOverrides = [
  {
    files: ['**/*.controller.ts'],
    rules: {
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.entity.ts'],
    rules: {
      camelcase: 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.module.ts'],
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.resolver.ts'],
    rules: {
      'filenames/match-exported': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.service.ts'],
    rules: {
      'filenames/match-exported': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  {
    rules: {
      'filenames/match-exported': 'off',
    },
  },
];

const createNestConfig = ({ overrides = [], ...options } = {}) => [
  ...createBaseConfig(options).map(stripFrontendSettings),
  ...backendOverrides,
  ...overrides,
];

module.exports = createNestConfig;
module.exports.createConfig = createNestConfig;
