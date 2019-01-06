"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var functions = require("firebase-functions");

var React = require("react");

var renderToString = require("react-dom/server");

var ApolloApp = require("./app/index");

var express = require("express");

var app = express();
app.get("**", function (req, res) {
  var html = renderToString(React.createElement(ApolloApp, null));
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;