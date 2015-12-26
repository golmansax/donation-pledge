/* eslint-disable max-len */

import path from 'path';
import { isDevelopment, isProduction } from '../server/config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer-stylus';
import jeet from 'jeet';
import nib from 'nib';
import rupture from 'rupture';

module.exports = {
  devtool: isDevelopment() ? 'eval' : null,

  output: {
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    loaders: [
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]__[local]___[hash:base64:5]' +
            '!stylus-loader?paths[]=node_modules&paths[]=lib'
        ),
      },
      {
        test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          `file?hash=sha512&digest=hex&name=/[path][name]${isProduction() ? '.[hash]' : ''}.[ext]`,
          'image-webpack?optimizationLevel=7',
        ],
      },
    ],

    postLoaders: isProduction() ? [{ loader: 'transform?envify' }] : undefined,
  },

  stylus: {
    use: [jeet(), nib(), rupture(), autoprefixer()],
  },

  resolve: {
    alias: {
      _webpack_assets: path.resolve(__dirname, '_webpack_assets.js'),
    },

    root: path.resolve(__dirname, '..', 'lib'),
  },
};
