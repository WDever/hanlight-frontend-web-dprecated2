module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
    'prettier',
    'airbnb',
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
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'tsx', 'ts'] },
    ],
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-empty-function': 0,
    'no-useless-constructor': 0,
    'import/no-unresolved': 0,
  },
};
