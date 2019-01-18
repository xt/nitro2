const functions = require("firebase-functions");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Cardlist = require("./app/CardList/index").default;
import mockResponse from "./app/data/mock-data";
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve( __dirname, "./dist" )));

app.get("/index", (req, res) => {
  const html = ReactDOMServer.renderToString(<Cardlist data={mockResponse}/>);
  res.set("Cache-Control", "public, max-age=600, s-max-age=1200");
  let template = `
        <div id="card-list">${html}</div>
        <script src="./products/products.app.js"></script>
    `;
  res.send(template);

});
export let n2productsSSR = functions.https.onRequest(app);
