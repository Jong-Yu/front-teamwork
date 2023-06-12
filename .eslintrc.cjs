module.exports = {
  env: { browser: true, es2020: true, amd: ture, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error", // 미사용 변수 에러
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "error", // any 사용 에러
    "@typescript-eslint/no-inferrable-types": "off",
  },
};
