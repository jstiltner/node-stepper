'use strict';

const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'www')));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

