const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const typescriptRules = require('../rules/typescript.js')

module.exports = {
  files: ['*.ts'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    ...importRules,
    ...airbnbRules,
    ...typescriptRules,
  },
}
