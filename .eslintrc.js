module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier/@typescript-eslint",
    "eslint-config-prettier/vue",
  ],

  rules: {
    "vue/require-default-prop": "off",
    "eol-last": ["error", "always"],
    "no-console": "warn",
  },
};
