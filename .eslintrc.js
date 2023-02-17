module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        ,
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['jsx-a11y'],
    env: {
        browser: true,
        commonjs: true,
    },
    globals: {
        React: true,
    },
    rules: {
        'no-empty-function': ['off'],
        'global-require': ['off'],
        'no-plusplus': ['off'],
        'no-param-reassign': ['off'],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-unused-vars': 'error',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'import/prefer-default-export': ['off'],
        'arrow-body-style': ['error', 'as-needed'],
        'no-underscore-dangle': ['off'],

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prop-types': ['error'],
        'react/jsx-props-no-spreading': ['off'],
        'react/self-closing-comp': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/display-name': ['off'],

        'jsx-a11y/no-static-element-interactions': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/mouse-events-have-key-events': ['warn'],
        'jsx-a11y/label-has-associated-control': ['off'],

        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        // '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-empty-function': ['error'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
