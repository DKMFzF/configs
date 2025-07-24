module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-var': 'error',
    'no-unused-vars': 'error',
    eqeqeq: ['error', 'always'],
    'default-case': 'error',
    
    'no-console': ['error', { allow: ['warn', 'error'] }],
    
    'camelcase': ['error', { 
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false,
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],

    'indent': ['error', 2],
    'max-len': ['error', { 
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'quotes': ['error', 'single', { 
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      ignore: [],
    }],
    'react/react-in-jsx-scope': 'off',

    'spaced-comment': ['error', 'always', {
      markers: ['/'],
      exceptions: ['-', '+'],
    }],
    'capitalized-comments': ['off'],
    'multiline-comment-style': ['error', 'separate-lines'],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
      rules: {
        'max-len': ['error', { code: 150 }],
      },
    },
    {
      files: ['**/*.debug.ts', '**/*.debug.tsx', '**/*.debug.js', '**/*.debug.jsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
