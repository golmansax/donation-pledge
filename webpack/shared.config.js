var ExtractTextPlugin = require('extract-text-webpack-plugin');
var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');
var stylusTypeUtils = require('stylus-type-utils');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?optional[]=runtime&plugins=babel-plugin-object-assign'],
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&&localIdentName=[path][name]__[local]___[hash:base64:5]' +
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

  stylus: {
    use: [jeet(), nib(), rupture(), stylusTypeUtils()],
  },
};
