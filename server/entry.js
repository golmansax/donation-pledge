/* eslint-disable no-console, no-var */

var PORT;

require('babel-polyfill');
require('../lib/setup');
PORT = require('./config').PORT;

// Use React global so we don't need to require React for JSX
global.React = require('react');

require('./').default.listen(PORT, () => {
  console.log(`golmansax/my-impact-pledge listening on port ${PORT}`);
});
