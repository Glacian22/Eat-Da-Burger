// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: (cb) => {
    orm.all(function (res) {
      cb(res);
    })
  },

  eat: (name, cb) => {
    orm.update('riz9ngz3ewy2wcp3.burgers', 'eaten', true, 'name', name, (res) => {
      cb(res);
    })
  },

  add: (name, cb) => {
    orm.create('riz9ngz3ewy2wcp3.burgers', 'name', 'eaten', name, false, (res) => {
      cb(res)
    })
  }


}


module.exports = burger;