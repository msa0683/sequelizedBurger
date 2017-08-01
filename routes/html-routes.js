// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================

var path = require('path');
var db = require("../models/index");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
    app.get('/', function(request, response) {
    	db.burger.findAll({})
    	.then(function(allBurgersData){
    		response.render('index', {allBurgersData});
    	})
    });

};


