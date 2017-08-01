// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
	  burger_name: {
	    type: DataTypes.STRING,
	    allowNull: false
	  },
	  // The availability boolean
	  devoured: {
	    type: DataTypes.BOOLEAN,
	    defaultValue: false
	  }
  	}, {
    timestamps: false
});
  return burger;
};
