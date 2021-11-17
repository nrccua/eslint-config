// eslint-disable-next-line import/no-extraneous-dependencies
let defaultConfig = require('@actinc/eslint-config/commitlint.config');

defaultConfig = {
  ...defaultConfig,
  parserPreset: {
    ...defaultConfig.parserPreset,
    parserOpts: {
      ...defaultConfig.parserOpts,
      headerPattern: /^(\[[A-Z0-9]*-[0-9]*\]):\s(.*)$/,
      headerCorrespondence: ['ticket', 'subject'],
    },
  },
  rules: {
    ...defaultConfig.rules,
    'subject-min-length': [2, 'always', 10],
    'type-empty': [0, 'never'],
  },
};

module.exports = defaultConfig;
