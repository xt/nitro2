var path = require("path");
var PACKAGE = require("./package.json");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var isProd = process.env.NODE_ENV !== "dev";
var externals = {};
if (isProd) {
  externals = {
    react: "react",
    "react-dom": "reactDOM",
    emotion: "@emotion/core",
    mobx: "mobx"
  };
}

var outputPathFragment = isProd ? "../../dist" + PACKAGE.name : "dist";

module.exports = {
  entry: "./app/index.tsx",
  output: {
    path: path.resolve(__dirname, outputPathFragment),
    filename: `${PACKAGE.name}.app.js`,
    publicPath: isProd ? `/${PACKAGE.name}` : ``
  },
  devtool: "source-map",
  externals: externals,
  module: {
    rules: [
      { test: /\.tsx?$/, use: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
      // { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
