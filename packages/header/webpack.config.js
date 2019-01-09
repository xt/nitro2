var path = require("path");
var PACKAGE = require("./package.json");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "../..", "dist/", PACKAGE.name),
    filename: `${PACKAGE.name}.app.js`,
    publicPath: `/${PACKAGE.name}`
  },
  externals: {
    react: "react",
    "react-dom": "reactDOM",
    emotion: "emotion",
    mobx: "mobx"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
    ]
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
