var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: {
    admin: './admin',
    browse: './browse'
  },
  devtool: '#source-map',
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin('vendors.js'),
    new UglifyJsPlugin()
  ]
};
