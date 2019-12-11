const javascript = require('./javascript.js')
const javascriptReact = require('./javascriptReact.js')
const typescript = require('./typescript.js')
const typescriptReact = require('./typescriptReact.js')

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
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
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  rules: {
    'global-require': 0,
    'default-case': 0,
    'max-classes-per-file': 0,
    'linebreak-style': [2, 'unix'],
    'lines-between-class-members': [
      1,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'no-console': 0,
    'no-restricted-globals': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'no-unused-vars': [1, { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'no-nested-ternary': 0,
    'no-param-reassign': ['error', { props: false }],
  },
}
