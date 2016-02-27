'use strict'

const usersData = require('../services/usersData');


module.exports.get = (req, res) => {

  //will return user specific data
  if (req.user) {


  } else {
  //show general data

  usersData(req, res);

  }
};
