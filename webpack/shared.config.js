/* eslint-disable no-var, max-len */

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-stylus');
var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');
var stylusTypeUtils = require('stylus-type-utils');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    loaders: [
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&&localIdentName=[path][name]__[local]___[hash:base64:5]' +
            '!stylus-loader?paths[]=node_modules&paths[]=frontend/shared/styles'
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
          'file?hash=sha512&digest=hex&name=[path][name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },

  stylus: {
    use: [jeet(), nib(), rupture(), stylusTypeUtils(), autoprefixer()],
  },

  resolve: {
    alias: {
      _webpack_assets: path.resolve(__dirname, '_webpack_assets.js'),
    },
  },
};
