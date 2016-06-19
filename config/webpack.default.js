var pckgJson = require('../package.json');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: pckgJson.name + '.js',
    path: 'dist',
    libraryTarget: 'umd',
    library: pckgJson.name 
  },

  externals: {
    '@angular/core': {
      commonjs: '@angular/core',
      commonjs2: '@angular/core',
      amd: '@angular/core'
    } 
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript', exclude: [/node_modules/] },
      { test: /\.less$/, loader: 'to-string!css!less' },
      { test: /\.scss$/, loader: 'to-string!css!sass' },
      { test: /\.styl$/, loader: 'to-string!css!stylus' },
      { test: /\.html$/, loader: 'raw' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
      VERSION: JSON.stringify(pckgJson.version) 
    })
  ]
};
