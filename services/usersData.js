"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/stepper.sqlite');

module.exports = function(req, res) {

  db.all(`
    SELECT  SUM(steps) AS allSteps FROM Inputs
    `,(err,data)=>{
      if (err) throw err;

      const allSteps = data[0].allSteps;

    db.all(`
      SELECT steps AS stepRecord, username FROM INPUTS
        JOIN USERS ON inputs.userid = users.userid
        ORDER BY STEPS DEsC LIMIT 1
      `,(err,data)=>{
        if (err) throw err;
        const stepRecord = data[0];

      db.all(`
        SELECT SUM(steps) AS totalSteps, username FROM INPUTS
          JOIN USERS ON inputs.userid = users.userid
          GROUP BY inputs.userid
          ORDER BY totalSteps DESC limit 1
        `,(err,data)=>{
          if (err) throw err;
          const topUser = data[0];

        res.render('userInfo',{
          allSteps: allSteps,
          stepRecord: stepRecord,
          topUser: topUser
        });
      })
    })
  })
};