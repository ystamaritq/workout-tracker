// added (express npm) =>  Minimalist web framework for node.
const express = require("express");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const logger = require("morgan");
// added (mongoose npm) => object modeling tool designed to work in an asynchronous environment
const mongoose = require("mongoose");
const path = require("path");
// added required controller to the server
const routes = require("./controllers");

// connect to mongo
mongoose.connect("mongodb://localhost/workout", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// setting the server port
const PORT = process.env.PORT || 3000;

// creating an express application
const app = express();

// set the app to use logger npm
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

// Add routes
app.use(routes);

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
