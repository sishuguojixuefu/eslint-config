const reactRules = require('./rules/react.js')
const typescriptRules = require('./rules/typescript.js')

module.exports = {
  files: ['*.tsx'],
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...reactRules,
    ...typescriptRules,
  },
}
