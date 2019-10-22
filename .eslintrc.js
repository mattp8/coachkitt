module.exports = {
    env: {
        node: true,
        es6: true
    },
    plugins: ['node', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:node/recommended'],
    globals: {
        fetch: true
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['warn', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'never'],
        'comma-dangle': 'warn',
        'import/order': [
            'error',
            { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'] }
        ],
        'node/no-unpublished-require': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
    }
}
