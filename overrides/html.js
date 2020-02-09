const airbnbRules = require('../rules/airbnb.js')

module.exports = {
  files: ['*.html'],
  plugins: ['html'],
  env: {
    browser: true,
  },
  rules: { ...airbnbRules },
}
