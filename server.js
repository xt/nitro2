// const config = require("config");
const express = require("express");
const Tailor = require("node-tailor");
// const path = require('path');
const { fetchTemplate, filterRequestHeaders } = require("./src");

const tailor = new Tailor({
  fetchTemplate,
  filterRequestHeaders
});

const app = express();

app.use(express.static("dist"));
/*Used for testing without tailorjs */
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname + "/templates/", "app-shell.html"));
// });

app.use(tailor.requestHandler);

const port = 3000;
app.listen(port, () => console.log(`Tailor server listening on port ${port}`));
