var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    admin: './admin',
    browse: './browse'
  },
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin('vendors.js', ['./vendor-1.js', './vendor-2.js'])
  ]
};
