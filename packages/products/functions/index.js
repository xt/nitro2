"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.n2products = void 0;

var _index = _interopRequireDefault(require("./app/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functions = require("firebase-functions");

var React = require("react");

var ReactDOMSerer = require("react-dom/server");

var express = require("express"); // import fs from "fs";
// const index = fs.readFileSync(__dirname + "/index.html", "utf8");


var app = express();
app.get("**", function (req, res) {
  var html = ReactDOMSerer.renderToString(React.createElement(_index.default, null));
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  res.send(html);
});
var n2products = functions.https.onRequest(app);
exports.n2products = n2products;