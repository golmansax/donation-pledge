/* eslint-disable no-var, max-len */

var webpack = require('webpack');
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
    ]
  },

  plugins: [
    new webpack.IgnorePlugin(/\.styl$/)
  ],

  stylus: sharedConfig.stylus,

};
