require('dotenv').config()
const express = require('express');
const path = require('path');
const compression = require('compression');
const _ = require('lodash');
const app = express();

app.use(compression())
app.set('trust proxy', true);
app.use(express.static(__dirname, {maxAge: '30d'}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Express server listening on %d, in %s mode', (process.env.PORT || 5000), app.get('env'));
});
