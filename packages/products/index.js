const functions = require("firebase-functions");
const React = require("react");
const ReactDOMSerer = require("react-dom/server");
import ApolloApp from "./app/index";
const express = require("express");
var Turbolinks = require("turbolinks");
Turbolinks.start();
// import fs from "fs";
// const index = fs.readFileSync(__dirname + "/index.html", "utf8");
const app = express();
app.get("**", (req, res) => {
  const html = ReactDOMSerer.renderToString(<ApolloApp />);
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  res.send(html);
});
export let n2products = functions.https.onRequest(app);
