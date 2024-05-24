/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  pluginReactConfig,
];