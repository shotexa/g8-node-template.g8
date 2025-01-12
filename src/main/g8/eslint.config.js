const tsParser = require("@typescript-eslint/parser")
const tsPlugin = require("@typescript-eslint/eslint-plugin")
const jestPlugin = require("eslint-plugin-jest")
const globals = require("globals")

module.exports = {
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: tsParser,
    parserOptions: {
      project: "tsconfig.json",
    },
    globals: {
      ...globals.node,
      ...globals.jest,
    },
  },
  plugins: {
    "@typescript-eslint": tsPlugin,
    jest: jestPlugin,
  },
  ignores: ["node_modules", "build/**/*", "**/*.js"],
  rules: {
    ...tsPlugin.configs.recommended.rules,
    ...jestPlugin.configs.recommended.rules,
    "@typescript-eslint/explicit-function-return-type": "warn",
    "no-constant-condition": "warn",
  },
}
