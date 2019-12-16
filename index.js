const vue = require('./overrides/vue.js')
const javascript = require('./overrides/javascript.js')
const javascriptReact = require('./overrides/javascriptReact.js')
const typescript = require('./overrides/typescript.js')
const typescriptReact = require('./overrides/typescriptReact.js')

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
    'import/extensions': ['.js', '.ts', '.tsx', '.vue'],
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
}
