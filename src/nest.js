/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function stripFrontendSettings(config) {
  return {
    ...config,
    extends: [
      'airbnb-base',
      ...(config.extends || []).filter(
        x =>
          !x.toLowerCase().includes('react') &&
          !x.toLowerCase().includes('storybook') &&
          !x.toLowerCase().includes('jsx-a11y') &&
          !x.toLowerCase().includes('next') &&
          !x.toLowerCase().includes('airbnb'),
      ),
    ],
    overrides: [...(config.overrides || []).map(x => stripFrontendSettings(x))],
    plugins: [
      ...(config.plugins || []).filter(
        x =>
          !x.toLowerCase().includes('react') &&
          !x.toLowerCase().includes('storybook') &&
          !x.toLowerCase().includes('jsx-a11y') &&
          !x.toLowerCase().includes('next'),
      ),
    ],
    rules: {
      ...Object.keys(config.rules || {}).reduce(
        (acc, x) =>
          x.toLowerCase().includes('react') ||
          x.toLowerCase().includes('storybook') ||
          x.toLowerCase().includes('jsx-a11y') ||
          x.toLowerCase().includes('next')
            ? acc
            : {
                ...acc,
                [x]: config.rules[x],
              },
        {},
      ),
    },
  };
}

const baseConfig = stripFrontendSettings(require('./index'));

const controllerConfig = {
  files: ['**/*.controller.ts'],
  rules: {
    'import/prefer-default-export': 'off',
  },
};

const entityConfig = {
  files: ['**/*.entity.ts'],
  rules: {
    camel_case: 'off',
    'import/prefer-default-export': 'off',
  },
};

const moduleConfig = {
  files: ['**/*.module.ts'],
  rules: {
    '@typescript-eslint/no-extraneous-class': 'off',
    'import/prefer-default-export': 'off',
  },
};

const resolverConfig = {
  files: ['**/*.resolver.ts'],
  rules: {
    'filenames/match-exported': 'off',
    'import/prefer-default-export': 'off',
  },
};

const serviceConfig = {
  files: ['**/*.service.ts'],
  rules: {
    'filenames/match-exported': 'off',
    'import/prefer-default-export': 'off',
  },
};

module.exports = {
  ...baseConfig,
  extends: [...baseConfig.extends],
  overrides: [...baseConfig.overrides, controllerConfig, entityConfig, moduleConfig, resolverConfig, serviceConfig],
  rules: {
    ...baseConfig.rules,
    'filenames/match-exported': 'off',
  },
};
