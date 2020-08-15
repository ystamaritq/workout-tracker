const mongoose = require("mongoose");

const Workout = mongoose.model(
	"Workout",
	new mongoose.Schema({
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: Schema.Types.ObjectId,
				ref: "Exercise",
			},
		],
	})
);

module.exports = Workout;
