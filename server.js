// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");

// setup express
var app = express();

// Define our port
const PORT = process.env.PORT || 3000;

// Set the app up with morgan.
// morgan is used to log our HTTP Requests. By setting morgan to 'dev'
// the :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes,
// and uncolored for all other codes.
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// set up handlebars with default layout main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// mongo connection for dev and prod
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Routes
// =========================================================================================

// require the html route and pass in the express parameter and then use them
routes = require("./routes")
app.use(routes)

// Listen on port 3000
app.listen(Port, function () {
    console.log(`App listening on port: ${Port}`);
});