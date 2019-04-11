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

  setEaten: (name, cb) => {
    var queryString = 'UPDATE riz9ngz3ewy2wcp3.burgers SET eaten = TRUE WHERE name = ?';

    connection.query(queryString, [name], (err, resp) => {
      if (err) throw err;

      cb(resp)
    })
  }




}

module.exports = orm;