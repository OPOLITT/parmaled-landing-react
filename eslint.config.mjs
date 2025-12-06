import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "build/**", "**/*.ts", "**/*.tsx"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Базовые правила можно добавить здесь
    },
  },
]);

export default eslintConfig;
