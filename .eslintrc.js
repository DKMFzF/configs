module.exports = {
  root: true,
  env: {
    browser: true, 
    es2021: true, 
    node: true,  
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, 
    },
    ecmaVersion: 12, 
    sourceType: 'module', 
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 80, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true }],
    'camelcase': ['error', { 'properties': 'never' }],
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }],
    'no-unused-vars': 'warn', 
    'react/react-in-jsx-scope': 'off', 
    'react/prop-types': 'off', 
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': true,
      'tabWidth': 2,
      'printWidth': 80,
      'trailingComma': 'es5' 
    }],
  },
  settings: {
    react: {
      version: 'detect', 
    },
  },
};

