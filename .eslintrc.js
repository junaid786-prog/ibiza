module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // Additional rules:
    'jsx-a11y/anchor-is-valid': 'off', // Ensures Link components are used instead of <a> tags for navigation
    'react/jsx-pascal-case': 'error', // Enforces PascalCase for component naming
    'react/react-in-jsx-scope': 'off', // Not needed for Next.js projects since React is automatically in scope
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Allows warnings and errors, but gives a warning for other console uses
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }], // Ensures security for external links
  },
};
