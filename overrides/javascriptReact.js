const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const reactRules = require('../rules/react.js')

module.exports = {
  files: ['*.jsx'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react-native/all', 'prettier', 'prettier/react'],
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
