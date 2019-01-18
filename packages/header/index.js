const functions = require("firebase-functions");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Header = require("./app/Header/index").default;
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.resolve( __dirname, "./dist" )));

app.get("/index", (req, res) => {
  const html = ReactDOMServer.renderToString(<Header />);
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  let template = `
        <div id="header">${ html }</div>
        <script src="./header/header.app.js"></script>
    `;
  res.send(template);
});

export let n2headerSSR = functions.https.onRequest(app);