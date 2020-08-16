const mongoose = require("mongoose");

const Exercise = mongoose.model(
	"Exercise",
	new mongoose.Schema({
		type: {
			type: String,
			trim: true,
			required: "Type is Required",
		},
		name: {
			type: String,
			trim: true,
			required: "Name is Required",
		},
		duration: {
			type: Number,
			required: "Duration is Required",
		},
		weight: Number,
		reps: Number,
		sets: Number,
		distance: Number,
	})
);

module.exports = Exercise;
