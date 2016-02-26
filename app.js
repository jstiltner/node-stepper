'use strict';


const path = require('path');
var express = require('express');
var app = express();
const sqlite3 = require('sqlite3');


const PORT = process.env.PORT || 3000;
const db = new sqlite3.Database('./db/stepper.sqlite');
// const data = "hello";
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'www')));


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/data', (req, res) => {

  db.all(

// WE NEED TO REWRITE THIS SQL QUERY!

    `SELECT count(*) as invoices,
           sum(Total) as total,
           strftime('%Y', InvoiceDate) as year
    FROM   Invoice
    GROUP BY year
    ${having}`,
      (err, data) => {
        if (err) throw err;

        res.send({
          data: data,
          info: 'ipsum lorem'
        });
      }
    );
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

