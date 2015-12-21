/* eslint-disable no-console, no-var */

var PORT;

require('babel-polyfill');
require('babel-core/register');
PORT = require('./config').PORT;

require('./').default.listen(PORT, () => {
  console.log(`golmansax/my-impact-pledge listening on port ${PORT}`);
});
