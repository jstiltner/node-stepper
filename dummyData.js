// "use strict"

// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('./db/stepper.sqlite');

// var allinputscount = 0;
// var weight = 160;
// var year = '2016';
// var month = '01';



// db.all(`
//   select count(*) as count from inputs
//   `, (err, res) => {
//     allinputscount = res[0].count;
//     console.log(allinputscount);

//     for (let i=1; i<25;i++) {

//         let day = i;

//         if (day < 10) {
//           day = "0" + day;
//         }


//         let randomNum10 = Math.floor(Math.random() * 10);
//         let steps = 8000 + randomNum10 * 1000
//         let dummyDate = `${year}-${month}-${day} 00:00:00`
//         console.log(dummyDate);

//         if(randomNum10 > 8) {
//           weight += 1
//         } else if (randomNum10 < 2) {
//           weight -= 1
//         }


//        db.run(`
//           INSERT INTO inputs
//           (inputID, userID, steps, weight, inputdate)
//           VALUES
//           (${allinputscount + i}, 3, ${steps}, ${weight}, '${dummyDate}');


//         `,
//         (err, res)=>{if (err) throw err});

//     }
// });



// var stmt = db.prepare("INSERT INTO inputs VALUES (?)");

// for (var i = 0; i < 10; i++) {
//   stmt.run("Ipsum " + i);
// }

// stmt.finalize();



// db.close();
