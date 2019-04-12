// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function to retrieve all info from db

var orm = {
  all: (cb) => {
    var queryString = 'SELECT * FROM riz9ngz3ewy2wcp3.burgers;';
    connection.query(queryString, (err, resp) => {
      if (err) throw err;
      cb(resp)
    });
  },

  update: (table, col, newVal, where, cond, cb) => {
    var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';

    connection.query(queryString, [table, col, newVal, where, cond], (err, resp) => {
      if (err) throw err;

      cb(resp);
    })
  },

  create: (table, col1, col2, val1, val2, cb) => {
    var queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
    connection.query(queryString, [table, col1, col2, val1, val2], (err, resp) => {
      cb(resp);
    })
  }
}

module.exports = orm;