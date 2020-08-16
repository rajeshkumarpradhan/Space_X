module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  "parser": "babel-eslint",
  'extends': [
    'plugin:react/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "strict": ["error", "global"],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "max-len": [2, {"code": 100, "tabWidth": 4, "ignoreUrls": true}],
    "eqeqeq": 1,
    "space-infix-ops": ["error", {"int32Hint": false}], 
    "space-before-blocks": 2,
    "comma-spacing": ["error", { "before": false, "after": true }],
  },
};
