var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(process.cwd() + '/public'));



require('./routes/api-routes.js')(app); 
require('./routes/html-routes.js')(app);


var mysql = require("mysql2");
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override')




// Serve static content for the app from the 'public' directory

app.use(methodOverride('_method'))


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});