import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["node_modules", "dist"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react,
      "simple-import-sort": simpleImportSort,
    },
    settings: { react: { version: "detect" } },
    rules: {
      curly: ["error", "all"],
      "no-console": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_|^args$" },
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^react$", "^@?\\w"],
            ["^@pages/*", "^@shared/*"],
            ["^\\u0000"],
            ["^\\."],
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
  prettierConfig,
);
