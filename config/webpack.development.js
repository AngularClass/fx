var pckgJson = require('../package.json');
var webpack = require('webpack');
var merge = require('webpack-merge');
var defaultConfig = require('./webpack.default');

module.exports = merge(defaultConfig, {
  entry: './src/index.ts',
  output: {
    path: 'dist'
  },
  externals: {
    '@angular/core': {
      commonjs: '@angular/core',
      commonjs2: '@angular/core',
      amd: '@angular/core'
    },
    '@angular/common': {
      commonjs: '@angular/common',
      commonjs2: '@angular/common',
      amd: '@angular/common'
    }
  },
  debug: true,
  devtool: 'cheap-sourcemap'
});