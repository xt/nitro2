"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.n2productsSSR = void 0;

var _mockData = _interopRequireDefault(require("./app/data/mock-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functions = require("firebase-functions");

var React = require("react");

var ReactDOMServer = require("react-dom/server");

var Cardlist = require("./app/CardList/index").default;

var express = require("express");

var path = require("path");

var app = express();
app.use(express.static(path.resolve(__dirname, "./dist")));
app.get("/index", function (req, res) {
  var html = ReactDOMServer.renderToString(React.createElement(Cardlist, {
    data: _mockData.default
  }));
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  var template = "\n        <div id=\"card-list\">".concat(html, "</div>\n        <script src=\"./products/products.app.js\"></script>\n    ");
  res.send(template);
});
var n2productsSSR = functions.https.onRequest(app);
exports.n2productsSSR = n2productsSSR;