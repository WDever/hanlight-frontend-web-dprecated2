module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    // "@typescript-eslint/explicit-function-return-type": ["false"],
    '@typescript-eslint/explicit-function-return-type': 0,
    // "prettier/prettier": ["error", {
    //   "singleQuote": true,
    //   "parser": "flow"
    // }],
    // "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'prettier/prettier': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    // "@typescript-eslint/no-unused-vars": 0,
    // "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
  },
};
