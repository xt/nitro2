const functions = require("firebase-functions");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Cardlist = require("./app/cardList/index").default;
import mockResponse from "./app/data/mock-data";
const express = require("express");

const app = express();
app.get("**", (req, res) => {
  const html = ReactDOMServer.renderToString(<Cardlist data={mockResponse}/>);
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  res.send(html);
});
export let n2products = functions.https.onRequest(app);
