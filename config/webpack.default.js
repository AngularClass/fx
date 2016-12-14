var pckgJson = require('../package.json');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript?declartation=true', exclude: [/node_modules/] },
      // { test: /\.json$/, loader: 'json', exclude: [/node_modules/] },
      // { test: /\.less$/, loader: 'to-string!css!less' },
      // { test: /\.scss$/, loader: 'to-string!css!sass' },
      // { test: /\.styl$/, loader: 'to-string!css!stylus' },
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
