const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = new Schema({
	author: String,
	title: String,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
