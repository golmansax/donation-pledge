/* eslint-disable no-var, max-len */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sharedConfig = require('./shared.config');

module.exports = {
  entry: {
    home_page: './frontend/home_page/index.js',
  },

  output: {
    path: sharedConfig.output.path,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  externals: /^[a-z][a-z\.\-0-9]*$/,

  target: 'node',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          optional: ['runtime'],
          compact: false,
        },
      },
    ].concat(sharedConfig.module.loaders),
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  stylus: sharedConfig.stylus,

};
