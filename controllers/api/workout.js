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
	db.Exercise.create(req.body) // create a new exercise
		.then(
			(
				{ _id } // get the new id
			) =>
				db.Workout.findOneAndUpdate(
					// update workout
					{ _id: mongoose.Types.ObjectId(req.params.id) }, // where id is given id
					{ $push: { exercises: _id } }, // add reference to new exercise to workout array
					{ new: true } // return the updated object
				).then((workout) => res.json(workout)) // send success
		)
		.catch((err) => {
			console.log(err);
			res.json(err);
		}); // send error;;
});

//
router.get("/range", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

module.exports = router;
