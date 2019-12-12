const typescriptRules = require('./rules/typescript.js')

module.exports = {
  files: ['*.ts'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    ...typescriptRules,
  },
}
