// const db = require("../models");

// module.exports = (app) => {
//     app.get("/api/workouts", (req, res) => {
//       //TODO
//       // 1. Add a join to include all of each Author's Posts
//       db.Workout.findAll({
//         include:[db.WorkoutSchema
//       }).then((dbWorkout) => {
//         res.json(dbWorkout);
//       });
//     });
// };