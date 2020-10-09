module.exports = {
  settings: {
    react: {
      version: '6.13.1',
    },
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars':['error',{varsIgnorePattern:'^_'}],
  },
};
