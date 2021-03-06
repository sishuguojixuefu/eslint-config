const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const vueRules = require('../rules/vue.js')

module.exports = {
  files: ['*.vue'],
  extends: ['plugin:vue/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    __static: true,
  },
  rules: { ...importRules, ...airbnbRules, ...vueRules },
}
