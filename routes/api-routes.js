// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var burgers = require("../models/burgers.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/:burgers?", function(req, res) {

    if (req.params.burgers) {

      burgers.insertOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    else {
      burgers.selectAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  app.post("/api/new", function(req, res) {

    // Take the request...
    var burgers = req.body;

    // Create a routeName
    var routeName = burgers_name.replace(/\s+/g, "").toLowerCase();

    burgers.create({
      burger_name: routeName,
    });

  });

  app.put("/api/burgers/:id", function(req, res) {
  	var condition = "id = " + req.params.id;

  	burgers.updateOne(
  		{devoured: true},
  		condition, function(data) {
  			res.redirect("/");

    })
  });
}

