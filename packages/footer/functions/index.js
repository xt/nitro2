"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.n2footer = void 0;

var functions = require("firebase-functions");

var React = require("react");

var ReactDOMServer = require("react-dom/server");

var Footer = require("./app/Footer/index");

var express = require("express");

var app = express();
app.get("**", function (req, res) {
  var html = ReactDOMServer.renderToString(React.createElement(Footer, null));
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  res.send(html);
});
var n2footer = functions.https.onRequest(app);
exports.n2footer = n2footer;