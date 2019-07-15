var path = require('path');
var PACKAGE = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var isProd = process.env.NODE_ENV !== 'dev';
var externals = {};
if (isProd) {
  externals = {
    react: 'react',
    'react-dom': 'reactDOM',

    '@emotion/core': 'emotionCore',
    //'@emotion': '@emotion/core',
    mobx: 'mobx',
    //pubSub: 'pubSub',
    '@nitro2/shared': 'nitro2Shared',

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
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true,
  },
};
