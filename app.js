'use strict';

var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;


app.set('view engine', 'jade');


app.get('/', (req, res) => {
  res.send('/ route works, time to render the index.jade file here!');
});

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });

