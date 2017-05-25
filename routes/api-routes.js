
var Burger = require("../models/burger.js");
var db = reqiore("../models");

module.exports =function(app){

	app.get("/api/all", function(req, res){
		db.Burger.findAll{{}}
		.then(function(dbBurger){
			res.json(dbBurger);
		})
	})
	}

	app.post("/api/new", function(req, res){
		db.Burger.create({
			name: req.params.name
		}).then(function(dbBurger){
			res.json(dbPost);
		});
	});

	app.post("/api/delete", function(req, res){
		Burger.destroy({
			where:{
				id: req.params.id
			}
		}).then(function(dbBurger){
			res.json(dbBurger);
		});
	});

};