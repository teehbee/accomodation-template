import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        YT: true, // Add YT as a global variable
      },
    },
    rules: {
      "no-unused-vars": ["error"],
    },
  },
  pluginJs.configs.recommended,
];
