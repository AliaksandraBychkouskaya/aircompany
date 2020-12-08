module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: false,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
  },
};
