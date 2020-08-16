const router = require("express").Router();
const workouts = require("./api/workout");

// API Routes will start '/api'
router.use("/api/workouts", workouts);

module.exports = router;
