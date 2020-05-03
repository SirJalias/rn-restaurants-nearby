module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  "extends": ["plugin:prettier/recommended", "@react-native-community"],
  'rules': {
    "prettier/prettier": ["error", { "singleQuote": true }]
  },
  'globals': {
    "fetch": false
  }
}