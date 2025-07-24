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
    // Базовые правила
    'no-var': 'error',
    'no-unused-vars': 'error',
    eqeqeq: ['error', 'always'],
    'default-case': 'error',
    
    // Правила для console.log
    'no-console': ['error', { allow: ['warn', 'error'] }],
    
    // Стиль именования
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
          match: false, // Запрещаем префикс I для интерфейсов
        },
      },
    ],

    // Форматирование
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

    // React правила
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      ignore: [],
    }],
    'react/react-in-jsx-scope': 'off',

    // Комментарии
    'spaced-comment': ['error', 'always', {
      markers: ['/'],
      exceptions: ['-', '+'],
    }],
    'capitalized-comments': ['off'], // Отключаем проверку заглавных букв
    'multiline-comment-style': ['error', 'separate-lines'],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
      rules: {
        'max-len': ['error', { code: 150 }], // Разрешаем более длинные строки в тестах
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
      typescript: {}, // Для корректной работы с TypeScript путями
    },
  },
};
