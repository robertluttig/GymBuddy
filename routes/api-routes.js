const db = require("../models");


// get all workouts
module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });

    // post method to create workout

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });
    // adding a put method to update a workout

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
			 req.params.id,
			{ $push: { exercises: req.body } },
			{ new: true, runValidators: true }
		)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
    });

    // // get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .sort({ date: -1 })
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    });
       
     
    
};




