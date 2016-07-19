const path = require('path');

module.exports = {
  extends: 'golmansax',
  settings: {
    'import/resolver': {
      node: { paths: [path.resolve(__dirname, 'lib')] },
    },
  },
  rules: {
    'global-require': [1],
  },
};
