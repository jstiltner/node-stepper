'use strict'

const usersData = require('../services/usersData');
const userData = require('../services/userData');


module.exports.get = (req, res) => {
  //will return user specific data
  if (req.params.username) {
    console.log(req.params.username);
    userData(req, res, req.params.username);


  } else {
  //show general data

    usersData(req, res);

  }
};
