const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const reactRules = require('../rules/react.js')

module.exports = {
  files: ['*.jsx'],
  env: {
    'react-native/react-native': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...importRules,
    ...airbnbRules,
    ...reactRules,
  },
}
