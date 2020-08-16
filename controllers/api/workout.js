const router = require("express").Router();
var db = require("../../models");

// get all workouts from the API, route => ('api/workouts')
router.get("/", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

// create new workout
router.post("/", (req, res) => {
	// inserting a new workout
	db.Workout.create(req.body) // create new workout
		.then((workout) => res.json(workout)) // send success
		.catch((err) => res.json(err)); // send error
});

module.exports = router;
