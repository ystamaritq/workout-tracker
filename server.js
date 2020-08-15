// added (express npm) =>  Minimalist web framework for node.
const express = require("express");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const logger = require("morgan");
const path = require("path");

const seed = require("./seeders/seed");

// setting the server port
const PORT = process.env.PORT || 3000;

// set the node require ./models
const db = require("./models");

// creating an express application
const app = express();
// set the app to use logger npm
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/exercise", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
