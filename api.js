const moment = require("moment")
const store   = require('./store');

// var knex = require('knex')({
//     client: 'sqlite3',
//     connection: {
//       filename: "./db.sqlite"
//     }
// });

module.exports = async (req, res) => {
  var time = moment().format('LT');   // 11:51 AM
//   let users = [];
//   store.studentList().then((req, res) => {
//     users = req;
//     console.log(users)
//     //   res.send({ users: 'Hello 2' })

//   });
  var users = await store.studentList();
  console.log(users)

  res.send({ users: users })

}