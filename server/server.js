const express = require('express');
const helment = require('helmet');
const Tailor = require('node-tailor');

const { fetchTemplate, filterRequestHeaders } = require('./middleware/tailor');

const tailor = new Tailor({
  fetchTemplate,
  filterRequestHeaders,
});

const app = express();
app.use(helment());
app.get('/', function(req, res, next) {
  req.url = '/index';
  next();
});
app.use(express.static('dist'));

app.use(tailor.requestHandler);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
