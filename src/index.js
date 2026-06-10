/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { fixupConfigRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nextPlugin = require('@next/eslint-plugin-next');
const stylisticPlugin = require('@stylistic/eslint-plugin');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const globalPlugins = {
  '@stylistic': stylisticPlugin,
  '@typescript-eslint': typescriptPlugin,
};

const baseConfig = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:lodash/recommended',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'filenames',
    'import',
    'jsx-a11y',
    'lodash',
    'new-with-error',
    'no-loops',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'regex',
    'security',
    'sort-keys-fix',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': ['warn', './src'],
    '@next/next/no-img-element': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'filenames/match-exported': ['warn', [null, 'pascal', 'camel']],
    'filenames/match-regex': 'off',
    'function-paren-newline': 'off',
    'import/extensions': ['error', 'never', { json: 'always', svg: 'always' }],
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.*', '**/*.stories.*', '**/*.test.*', '**/test/**/*.*'],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/order': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'lodash/import-scope': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/preferred-alias': 'off',
    'new-with-error/new-with-error': 'error',
    'no-console': 'error',
    'no-loops/no-loops': 'error',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__DEV__', '__ENV__', '__typename', '_cachedRowCount', '_dataBlob', '_ensureIndex', '_id', '_typename'],
        allowAfterThis: true,
      },
    ],
    'no-use-before-define': 'off',
    'no-useless-constructor': 'error',
    'prefer-destructuring': [
      'off',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    'prettier/prettier': 'error',
    'promise/always-return': 'error',
    'promise/avoid-new': 'warn',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': 'warn',
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/no-deprecated': 'error',
    'react/no-invalid-html-attribute': 'off',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-render-return': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'childContextTypes',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          'static-methods': [
            'displayName',
            'props',
            'state',
            'contextType',
            'contextTypes',
            'defaultProps',
            'getInitialProps',
            'navigationOptions',
          ],
        },
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-unsafe-regex': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
    next: {},
  },
};

const typescriptRules = {
  '@stylistic/member-delimiter-style': 'error',
  '@stylistic/type-annotation-spacing': 'error',
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      custom: {
        match: true,
        regex: '^I[A-Z]',
      },
      format: ['PascalCase'],
      selector: 'interface',
    },
  ],
  '@typescript-eslint/no-base-to-string': 'off',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-empty-object-type': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-implied-eval': 'off',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
  '@typescript-eslint/no-unsafe-assignment': 'warn',
  '@typescript-eslint/no-unsafe-call': 'warn',
  '@typescript-eslint/no-unsafe-member-access': 'warn',
  '@typescript-eslint/no-unsafe-unary-minus': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/only-throw-error': 'error',
  '@typescript-eslint/prefer-promise-reject-errors': 'off',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/unified-signatures': 'error',
  'import/order': [
    'warn',
    {
      alphabetize: { caseInsensitive: true, order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      'newlines-between': 'always',
      pathGroups: [
        {
          group: 'internal',
          pattern: '~/**',
        },
        {
          group: 'external',
          pattern: '@**',
        },
        {
          group: 'external',
          pattern: 'next/**',
        },
      ],
      warnOnUnassignedImports: true,
    },
  ],
  'no-throw-literal': 'off',
  'no-useless-constructor': 'off',
};

const sanitizeCompatConfig = config => {
  const booleanPropNaming = config.rules?.['react/boolean-prop-naming'];
  const plugins = Object.fromEntries(Object.entries(config.plugins ?? {}).filter(([name]) => !(name in globalPlugins)));
  const sanitizedConfig =
    config.plugins && Object.keys(plugins).length !== Object.keys(config.plugins).length
      ? {
          ...config,
          plugins,
        }
      : config;

  if (Array.isArray(booleanPropNaming) && booleanPropNaming[1]?.message === '') {
    const { message, ...options } = booleanPropNaming[1];

    return {
      ...sanitizedConfig,
      rules: {
        ...sanitizedConfig.rules,
        'react/boolean-prop-naming': [booleanPropNaming[0], options],
      },
    };
  }

  return sanitizedConfig;
};

const makeCompatConfig = config => fixupConfigRules(compat.config(config)).map(sanitizeCompatConfig);

const makeTypescriptConfig = ({ files, project, tsconfigRootDir }) =>
  makeCompatConfig({
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project,
      tsconfigRootDir,
    },
    plugins: ['@stylistic', '@typescript-eslint', 'prettier'],
    rules: typescriptRules,
  }).map(config => ({ ...config, files }));

const createConfig = ({
  ignores = [],
  nextRootDir,
  overrides = [],
  resolverProject,
  tsconfigRootDir = process.cwd(),
  typescriptProjects = [{ files: ['**/*.ts', '**/*.tsx'], project: ['tsconfig.json'] }],
} = {}) => [
  {
    ignores: ['dist/**', 'node_modules/**', ...ignores],
  },
  {
    plugins: {
      ...globalPlugins,
    },
  },
  ...makeCompatConfig({
    ...baseConfig,
    settings: {
      ...baseConfig.settings,
      'import/resolver': {
        ...baseConfig.settings['import/resolver'],
        typescript: resolverProject ? { project: resolverProject } : {},
      },
      next: nextRootDir ? { rootDir: nextRootDir } : {},
    },
  }),
  nextPlugin.configs.recommended,
  ...typescriptProjects.flatMap(({ files, project }) => makeTypescriptConfig({ files, project, tsconfigRootDir })),
  {
    files: ['test/**', '**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'storybook/story-exports': 'off',
    },
  },
  ...overrides,
];

module.exports = createConfig;
module.exports.createConfig = createConfig;
