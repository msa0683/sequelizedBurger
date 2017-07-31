var express = require("express");

var burgers = require("../models/burgers.js");

var router = express.Router();


router.get("/", function(req, res) {
	burgers.selectAll(function(data) {
		var burgers_data = data
		console.log(burgers_data);
		res.render("index", {burgers_data});
	});
});

router.post("/burgers", function(req, res) {
	burgers.insertOne(
		[ "burger_name" ], 
		[ req.body.burger_name], 
		function(data) {
			res.redirect("/");
		}
	);
});

router.put("/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	console.log(req)

	burgers.updateOne(
		{devoured: true},
		condition, function(data) {
			res.redirect("/");
	
	});
});


module.exports = router; 
