export default `
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    "prettier/@typescript-eslint"
  ],
  "plugins": ["@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"]
  }
}
`;
