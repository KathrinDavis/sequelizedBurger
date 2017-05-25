//require: express
//method-override
//body-parser

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./modles");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(express.static(process.cwd()+"/public"));

app.use(bodyParser.urlencoded({extended:false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("listening on PORT %s"+PORT);
	});
});
