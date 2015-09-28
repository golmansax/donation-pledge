/* eslint-disable no-var, max-len */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');
var stylusTypeUtils = require('stylus-type-utils');

module.exports = {
  entry: {
    home_page: './components/home_page/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
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
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&&localIdentName=[name]__[local]___[hash:base64:5]' +
            '!stylus-loader?paths=node_modules'
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
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  stylus: {
    use: [jeet(), nib(), rupture(), stylusTypeUtils()],
  },

};
