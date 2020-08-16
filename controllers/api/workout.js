const router = require("express").Router();
var db = require("../../models");

// get all workouts from the API, route => ('api/workouts')
router.get("/", (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			console.log(dbWorkout);
			res.json(dbWorkout);
			console.log(dbWorkout);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		});
});

module.exports = router;
