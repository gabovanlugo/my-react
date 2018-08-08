module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'react/jsx-filename-extension': 0,
  },
  globals: {
    document: true,
    console: true,
  }
};
