//Here there be ROUTES

var express = require("express");

var router = express.Router();

// Import the burger model 
var burger = require("../models/burgerModel.js");

// root route
router.get("/", function (req, res) {
  console.log("get root route")
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// post route
router.post("/api", function (req, res) {
  burger.add(req.body.name, function (result) {
    res.end();
  });
});

// put (update) route
router.put("/api/:id", function (req, res) {
  burger.eat(req.params.id, (res)=>{});
  res.status(200).end();
});




// Export routes for server.js to use.
module.exports = router;