module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		// jquery: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module', // Allows for the use of imports
	},

	parser: '@typescript-eslint/parser', // Specifies the ESLint parser

	rules: {
		'prettier/prettier': ['error'],
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/no-unused-vars': 0,
	},

	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',

		document: false,
		window: false,
		console: false,
		$: false,
		Promise: false,
		require: false,
		module: false,
		exports: false,
		import: false,
		export: false,
		class: false,
	},
};
