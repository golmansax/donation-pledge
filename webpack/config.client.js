/* eslint-disable max-len */

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import sharedConfig from './config.shared';
import path from 'path';
import webpack from 'webpack';
import { isProduction } from '../server/config';

module.exports = {
  devtool: sharedConfig.devtool,

  entry: {
    home_page: './frontend/home_page/client_entry.js',
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
        query: {
          // optional: ['runtime'],
          plugins: 'babel-plugin-object-assign',
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
    new webpack.ProvidePlugin({ React: 'react' }),
  ],

  stylus: sharedConfig.stylus,
};
