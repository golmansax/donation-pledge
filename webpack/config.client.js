/* eslint-disable max-len */

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import sharedConfig from './config.shared';
import path from 'path';
import { ProvidePlugin, optimize } from 'webpack';
import { isProduction } from '../server/config';
const { CommonsChunkPlugin } = optimize;

module.exports = {
  devtool: sharedConfig.devtool,

  entry: {
    home_page: './frontend/home_page/client_entry.js',
    user_page: './frontend/user_page/client_entry.js',
    login_page: './frontend/login_page/client_entry.js',
  },

  output: {
    path: sharedConfig.output.path,
    filename: `[name].client_entry${isProduction() ? '.[chunkhash]' : ''}.js`,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          // optional: ['runtime'],
          plugins: ['transform-object-assign'],
        },
      },
    ].concat(sharedConfig.module.loaders),

    postLoaders: sharedConfig.module.postLoaders,
  },

  plugins: [
    new ExtractTextPlugin('[name].client.css', { allChunks: true }),
    new AssetsPlugin({
      path: path.join(__dirname, 'build'),
      filename: 'webpack_assets.client.json',
    }),
    new ProvidePlugin({ React: 'react', Reflect: 'core-js/es6/reflect' }),
    new CommonsChunkPlugin('commons', `commons${isProduction() ? '.[chunkhash]' : ''}.js`),
  ],

  stylus: sharedConfig.stylus,
};
