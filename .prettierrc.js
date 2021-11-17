const defaultConfig = require('@actinc/eslint-config/prettier.config');

const config = { ...defaultConfig };

// jsxBracketSameLine is deprecated, so squash the warning
if (typeof config.jsxBracketSameLine !== 'undefined') {
  delete config.jsxBracketSameLine;
}
config.printWidth = 160;
config.insertPragma = false;
config.requirePragma = false;

module.exports = config;
