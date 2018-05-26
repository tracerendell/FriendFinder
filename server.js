// dependencies/nom packages

var express = require("express");
var bodyParser = require("body-parser");

// variable for express
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Router

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener

app.listen(PORT, function() {
    console.log("App is listening carefully on PORT: " + PORT);
});