module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ['tui', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-var': 'error',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
    'no-console': 'warn',
    'no-param-reassign': 'error',
  },
};
