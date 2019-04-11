// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "	mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vkz6tglzgz4wc92n",
  password: "fxb4d88gsj6hi7ht",
  database: "riz9ngz3ewy2wcp3"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
