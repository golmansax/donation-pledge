/* eslint-disable no-var, max-len */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var sharedConfig = require('./config.shared');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    home_page: './frontend/home_page/client_entry.js',
  },

  output: {
    path: sharedConfig.output.path,
    filename: '[name].client_entry.[chunkhash].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          // optional: ['runtime'],
          plugins: 'babel-plugin-object-assign',
        },
      },
    ].concat(sharedConfig.module.loaders),

    postLoaders: [{ loader: "transform?envify" }],
  },

  plugins: [
    new ExtractTextPlugin('[name].client.css', { allChunks: true }),
    new AssetsPlugin({
      path: path.join(__dirname, 'build'),
      filename: 'webpack_assets.client.json',
    }),
    new webpack.ProvidePlugin({ React: 'react' }),
  ],

  stylus: sharedConfig.stylus,
};
