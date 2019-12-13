const reactRules = require('./rules/react.js')

module.exports = {
  files: ['*.jsx'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...reactRules,
  },
}
