'use strict';

const express = require('express');
const app = express();

// setup dust view engine
require('./lib/dust')(app);

app.get('/', function (req, res) {
  res.render('index.dust', {});
});

app.listen(3000, function () {
  console.log('server listening on port 3000!');
});
