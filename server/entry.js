/* eslint-disable no-console, no-var */

var PORT;

require('babel/register');
PORT = require('./config').PORT;

require('./').listen(PORT, () => {
  console.log(`golmansax/my-impact-pledge listening on port ${PORT}`);
});
