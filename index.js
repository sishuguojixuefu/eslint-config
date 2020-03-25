const vue = require('./overrides/vue.js')
const javascriptReact = require('./overrides/javascriptReact.js')
const typescript = require('./overrides/typescript.js')
const typescriptReact = require('./overrides/typescriptReact.js')

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:you-dont-need-momentjs/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-useless-constructor': 1,
    'no-console': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-useless-catch': 0,
    'no-nested-ternary': 0, // 禁止使用嵌套的三元表达式
    'no-restricted-globals': 0, // 禁用特定的全局变量
    'no-use-before-define': 0, // 禁止定义前使用
    'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
    'no-unused-expressions': 0, // 禁止未使用过的表达式
    'no-unused-vars': 1,
    'no-param-reassign': [2, { props: false }], // 禁止对函数参数再赋值
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    'default-case': 0,
    'global-require': 0,
    'lines-between-class-members': [
      // 要求或禁止在类成员之间出现空行
      2,
      'always',
      {
        exceptAfterSingleLine: true, //  跳过对单行类成员之后的空行的检查
      },
    ],
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0, // When there is only a single export from a module, prefer using default export over named export.
    'import/extensions': 0, // Ensure consistent use of file extension within the import path
    'import/no-extraneous-dependencies': 0, // Forbid the use of extraneous packages
    'import/no-named-as-default-member': 0,
    'promise/no-promise-in-callback': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['prettier'],
      parser: 'babel-eslint',
    },
    javascriptReact,
    typescript,
    typescriptReact,
    vue,
    {
      files: ['*.html'],
      plugins: ['html'],
      env: {
        browser: true,
      },
    },
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx', '.vue'],
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
}
