/* eslint-disable no-var, max-len */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var sharedConfig = require('./shared.config');

module.exports = {
  entry: {
    home_page: './frontend/home_page/index.js',
  },

  output: {
    path: path.resolve(__dirname, '..', 'server', 'build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  externals: /^[a-z][a-z\.\-0-9]*$/,

  target: 'node',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?optional[]=runtime'],
      },
    ].concat(sharedConfig.module.loaders),
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  stylus: sharedConfig.stylus,

};
