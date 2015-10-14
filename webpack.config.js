require('babel/register');

module.exports = [
  require('./webpack/config.server.js'),
  require('./webpack/config.client.js'),
];
