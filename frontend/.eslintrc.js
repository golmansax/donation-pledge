module.exports = {
  globals: {
    window: false,
    document: false,
  },
  rules: {
    'no-underscore-dangle': [2, {
      allowAfterThis: true,
    }],
    'react/jsx-no-bind': [1],
  },
};
