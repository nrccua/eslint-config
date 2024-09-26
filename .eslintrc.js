const baseConfig = require('./src/index');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    '@next/next/no-html-link-for-pages': ['warn', './examples'],
  },
};
