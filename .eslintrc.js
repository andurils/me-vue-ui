module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  // parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
