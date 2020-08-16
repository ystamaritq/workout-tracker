const router = require("express").Router();
var db = require("../../models");
const mongoose = require("mongoose");

// get all workouts from the API, route => ('api/workouts')
router.get("/", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

// create new workout , ('api/workouts')
router.post("/", (req, res) => {
	// inserting a new workout
	db.Workout.create(req.body) // create new workout
		.then((workout) => res.json(workout)) // send success
		.catch((err) => res.json(err)); // send error
});

// add exercise by the workout id
router.put("/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		// update workout
		{ _id: mongoose.Types.ObjectId(req.params.id) }, // where id is given id
		{ $push: { exercises: req.body } }, // add new exercise to workout array
		{ new: true } // return the updated object
	)
		.then((workout) => res.json(workout)) // send success
		.catch((err) => res.json(err)); // send error;;
});

/**
 * get the date at midnight six days from now
 */
const getSixDaysAgoDate = () => {
	let sixDaysAgo = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
	// at midnight
	sixDaysAgo.setHours(0, 0, 0, 0);
	// returning the days
	return sixDaysAgo;
};

// workouts in the last 7 days
router.get("/range", (req, res) => {
	db.Workout.find({
		day: { $gte: getSixDaysAgoDate() },
	})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

module.exports = router;
