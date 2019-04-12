var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});


// **********TESTING ORM***************
// var orm = require("./config/orm.js");

// orm.all((res)=>{console.log("all:", res)})

// orm.update('riz9ngz3ewy2wcp3.burgers','eaten', true, 'name', 'waffle iron', (res) =>{
//   orm.all((res)=>{
//     console.log("all:", res)
//   })
// })

// var burger = require("./models/burgerModel.js")
// burger.all((res) =>{
//   console.table( res);
// })

// burger.eat('waffle iron', (res)=>{
//   burger.all((res) =>{
//     console.table(res);
//   })
  
// });

// burger.add('angus burger', (res)=>{
//     burger.all((res) =>{
//       console.table(res);
//     })
//   })