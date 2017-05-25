var path = require("path");

module.exporte = function(app){

	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
	});
};