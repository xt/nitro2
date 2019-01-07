const functions = require("firebase-functions");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Footer = require("./app/Footer/index");
const express = require("express");

const app = express();
app.get("**", (req, res) => {
  const html = ReactDOMServer.renderToString(<Footer />);
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  res.send(html);
});
export let n2footer = functions.https.onRequest(app);
