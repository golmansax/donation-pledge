require('babel-core/register');

module.exports = [
  require('./webpack/config.server.js'),
  require('./webpack/config.client.js'),
];
