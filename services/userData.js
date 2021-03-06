"use strict";

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/stepper.sqlite');

module.exports = function(req, res, username, isAPICall) {

  db.all(`
    SELECT  SUM(steps) AS total, AVG(steps) as dailyAverage FROM Inputs
      JOIN USERS ON inputs.userid = users.userid
      WHERE username = "${username}" COLLATE NOCASE
    `,(err,data)=>{
      if (err) throw err;

      const allSteps = data[0];
      allSteps.dailyAverage = parseInt(allSteps.dailyAverage);

    db.all(`
      SELECT steps AS stepRecord, username FROM INPUTS
        JOIN USERS ON inputs.userid = users.userid
        WHERE users.username = "${username}" COLLATE NOCASE
        ORDER BY STEPS DESC LIMIT 1
      `,(err,data)=>{
        if (err) throw err;
        const stepRecord = data[0];

      db.all(`
        SELECT steps AS dailySteps, username FROM INPUTS
          JOIN USERS ON inputs.userid = users.userid
          WHERE users.username = "${username}" COLLATE NOCASE
          ORDER BY inputDate
        `,(err,data)=>{
          if (err) throw err;
          const dailySteps = data;

          console.log(dailySteps);


          if (isAPICall) {
            res.send({
            allSteps: allSteps,
            stepRecord: stepRecord,
            dailySteps: dailySteps
          });
          } else {
          res.render('userInfo',{
            allSteps: allSteps,
            stepRecord: stepRecord,
            dailySteps: dailySteps
          });
        }
      })
    })
  })
};