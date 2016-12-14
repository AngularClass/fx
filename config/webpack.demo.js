var merge = require('webpack-merge');
var defaultConfig = require('./webpack.default');
var path = require('path');

module.exports = merge(defaultConfig, {
  entry: './demo/index.ts',
  output: {
    path: path.join(__dirname, 'demo-out'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  }
})