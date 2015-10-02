/* eslint-disable no-var, max-len */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var sharedConfig = require('./shared.config');

module.exports = {
  entry: {
    home_page: './frontend/home_page/client_entry.js',
  },

  output: {
    path: sharedConfig.output.path,
    filename: '[name]-client_entry.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?optional[]=runtime&plugins=babel-plugin-object-assign'],
      },
    ].concat(sharedConfig.module.loaders),
  },

  plugins: [
    new ExtractTextPlugin('[name].css', { disable: true }),
  ],

  stylus: sharedConfig.stylus,

};
