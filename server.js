// added (express npm) =>  Minimalist web framework for node.
const express = require("express");
// added (morgan npm) =>  HTTP request logger middleware for node.js
const logger = require("morgan");
// added (mongoose npm) => is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
const mongoose = require("mongoose");

// setting the server port
const PORT = process.env.PORT || 3000;

// set the node require ./models
const db = require("./models");

// set the app to use logger npm
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
