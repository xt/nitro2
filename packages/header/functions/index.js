"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.n2header = void 0;

var functions = require("firebase-functions");

var React = require("react");

var ReactDOMSerer = require("react-dom/server");

var Header = require("./app/Header/index").default;

var express = require("express");

var app = express();
app.get("**", function (req, res) {
  var html = ReactDOMSerer.renderToString(React.createElement(Header, null));
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  res.send(html);
});
var n2header = functions.https.onRequest(app);
exports.n2header = n2header;