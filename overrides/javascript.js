const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')

module.exports = {
  files: ['*.js'],
  extends: ['prettier'],
  parser: 'babel-eslint',
  rules: { ...importRules, ...airbnbRules },
}
