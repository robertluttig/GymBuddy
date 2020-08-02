const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: []
  },
});
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
// day: new Date(new Date().setDate(new Date().getDate() - 10)),
// exercises: [
//   {
//     type: "resistance",
//     name: "Bicep Curl",
//     duration: 20,
//     weight: 100,
//     reps: 10,
//     sets: 4
//   }
// ]
// },
