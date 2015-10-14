/* eslint-disable no-var, max-len */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var sharedConfig = require('./config.shared');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    home_page: './frontend/home_page/server_entry.js',
  },

  output: {
    path: sharedConfig.output.path,
    filename: '[name].server_entry.js',
    libraryTarget: 'commonjs2',
  },

  externals: /^[a-z_][a-z\.\-0-9]*$/,

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

    postLoaders: [{ loader: 'transform?envify' }],
  },

  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css', { allChunks: true }),
    new AssetsPlugin({
      path: path.join(__dirname, 'build'),
      filename: 'webpack_assets.server.json',
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
  ],

  stylus: sharedConfig.stylus,

  resolve: { alias: sharedConfig.resolve.alias },
};
