module.exports = {
	extends: [
		'airbnb',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'airbnb/hooks',
	],
	plugins: ['prettier', 'import'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'import/no-unresolved': 1, // turn on errors for missing imports
		'react/jsx-filename-extension': [0, { extensions: ['.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': [
			0,
			{ html: 'ignore', custom: 'ignore', explicitSpread: 'ignore' },
		],
		'no-use-before-define': 0,
		'@typescript-eslint/no-use-before-define': 2,
		'import/order': [
			2,
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
			},
		],
		'import/newline-after-import': 1,
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-param-reassign': 0,
		'import/no-cycle': 0,
		'react-hooks/exhaustive-deps': 0,
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': ['error'],
		'react/function-component-definition': 0,
		'jsx-a11y/label-has-associated-control': 0,
	},
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				project: './tsconfig.eslint.json',
			},
		},
	},
};
