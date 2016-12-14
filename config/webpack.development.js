var pckgJson = require('../package.json');
var webpack = require('webpack');
var merge = require('webpack-merge');
var defaultConfig = require('./webpack.default');

module.exports = merge(defaultConfig, {
  entry: './src/index.ts',
  output: {
    filename: 'fx.js',
    path: 'dist',
    libraryTarget: 'umd',
    library: pckgJson.name 
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
    },
    '@angular/compiler': {
      commonjs: '@angular/common',
      commonjs2: '@angular/common',
      amd: '@angular/common'
    },
    'core-js': {
      commonjs: 'core-js',
      commonjs2: 'core-js',
      amd: 'core-js'
    },
    'zone.js': {
      commonjs: 'zone.js',
      commonjs2: 'zone.js',
      amd: 'zone.js'
    }
  },
  debug: true,
  devtool: 'cheap-sourcemap'
});