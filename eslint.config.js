import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
	{ ignores: ["dist"] },
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			import: importPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						["parent", "sibling", "index"],
					],
					pathGroups: [
						{
							pattern: "react",
							group: "external",
							position: "before",
						},
					],
					pathGroupsExcludedImportTypes: ["react"],
					alphabetize: { order: "asc", caseInsensitive: true },
					"newlines-between": "always",
					warnOnUnassignedImports: true,
				},
			],
			"import/newline-after-import": ["error", { count: 1 }],
			"import/no-duplicates": "error",
			"import/no-unresolved": "error",
		},
	},
];
