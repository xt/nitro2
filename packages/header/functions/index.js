"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.n2headerSSR = void 0;

var functions = require("firebase-functions");

var React = require("react");

var ReactDOMServer = require("react-dom/server");

var Header = require("./app/Header/index").default;

var express = require("express");

var path = require("path");

var app = express();
app.use(express.static(path.resolve(__dirname, "./dist")));
app.get("/index", function (req, res) {
  var html = ReactDOMServer.renderToString(React.createElement(Header, null));
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  var template = "\n        <div id=\"header\">".concat(html, "</div>\n        <script src=\"./header/header.app.js\"></script>\n    ");
  res.send(template);
});
var n2headerSSR = functions.https.onRequest(app);
exports.n2headerSSR = n2headerSSR;