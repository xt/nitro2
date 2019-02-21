var path = require('path');
var PACKAGE = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = process.env.NODE_ENV !== 'dev';
var externals = {};
if (isProd) {
  externals = {
    react: 'react',
    'react-dom': 'reactDOM',
    emotion: '@emotion/core',
    mobx: 'mobx',
    pubSub: 'pubSub',
  };
}

var outputPathFragment = isProd ? '../../dist/' + PACKAGE.name : 'dist';

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, outputPathFragment),
    filename: `${PACKAGE.name}.app.js`,
    publicPath: isProd ? `/${PACKAGE.name}` : ``,
  },
  externals: externals,
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
    ],
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
};
