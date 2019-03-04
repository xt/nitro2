const express = require('express');
const Tailor = require('node-tailor');
const { fetchTemplate, filterRequestHeaders } = require('./tailor');

const tailor = new Tailor({
  fetchTemplate,
  filterRequestHeaders,
});

const app = express();
app.get('/', function(req, res, next) {
  req.url = '/index';
  next();
});
app.use(express.static('dist'));

app.use(tailor.requestHandler);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
