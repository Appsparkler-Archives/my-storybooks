module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "google",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "error",
    "require-jsdoc": "off",
    "valid-jsdoc": 0,
  },
};
