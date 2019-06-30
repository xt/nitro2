var path = require('path');
var PACKAGE = require('./package.json');
var isProd = process.env.NODE_ENV !== 'dev';

var outputPathFragment = isProd ? '../../dist/' + PACKAGE.name : 'dist';

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, outputPathFragment),
    filename: `${PACKAGE.name}.app.js`,
  },
  module: {
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      },
    ],
  },
  mode: 'production',
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true,
  },
};
