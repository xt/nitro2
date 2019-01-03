const functions = require("firebase-functions");
const React = require("react");
const renderToString = require("react-dom/server");
const ApolloApp = require("./app/index");
const express = require("express");

const app = express();
app.get("**", (req, res) => {
  const html = renderToString(<ApolloApp />);
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
});
export let ssrapp = functions.https.onRequest(app);
