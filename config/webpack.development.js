var pckgJson = require('../package.json');
var webpack = require('webpack');
var merge = require('webpack-merge');
var defaultConfig = require('./webpack.default');

module.exports = merge(defaultConfig, {
  entry: './src/index.ts',
  output: {
    path: 'dist'
  },
  debug: true,
  devtool: 'cheap-sourcemap'
});