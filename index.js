const vue = require('./vue.js')
const javascript = require('./javascript.js')
const javascriptReact = require('./javascriptReact.js')
const typescript = require('./typescript.js')
const typescriptReact = require('./typescriptReact.js')

module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:eslint-comments/recommended', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    javascript,
    javascriptReact,
    typescript,
    typescriptReact,
    vue,
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0, // Forbid the use of extraneous packages
    'lines-between-class-members': [
      // 要求或禁止在类成员之间出现空行
      2,
      'always',
      {
        exceptAfterSingleLine: true, //  跳过对单行类成员之后的空行的检查
      },
    ],
    'max-classes-per-file': 0,
    'no-console': 0,
    'no-param-reassign': [2, { props: false }],
    'no-restricted-globals': 0, // 禁用特定的全局变量
    'no-use-before-define': [2, { functions: true, classes: true, variables: false }], // 禁止定义前使用（变量例外）
    'no-unused-vars': [2, { vars: 'all', args: 'none', ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
  },
}
