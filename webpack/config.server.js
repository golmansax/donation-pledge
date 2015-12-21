/* eslint-disable max-len */

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import sharedConfig from './config.shared';
import path from 'path';
import { ProvidePlugin } from 'webpack';
import { isProduction } from '../server/config';

module.exports = {
  devtool: sharedConfig.devtool,

  entry: {
    home_page: './frontend/home_page/server_entry.js',
    user_page: './frontend/user_page/server_entry.js',
    login_page: './frontend/login_page/server_entry.js',
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
          // plugins: ['transform-runtime'],
          compact: false,
        },
      },
    ].concat(sharedConfig.module.loaders),

    postLoaders: sharedConfig.module.postLoaders,
  },

  plugins: [
    new ExtractTextPlugin(`[name]${isProduction() ? '.[chunkhash]' : ''}.css`, {
      allChunks: true,
    }),
    new AssetsPlugin({
      path: path.join(__dirname, 'build'),
      filename: 'webpack_assets.server.json',
    }),
    new ProvidePlugin({ React: 'react' }),
  ],

  stylus: sharedConfig.stylus,

  resolve: { alias: sharedConfig.resolve.alias },
};
