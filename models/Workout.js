const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: []
  }
  // ,
  // toJSON:
  //  { virtuals: true } 
});

// Create a virtual property `domain` that's computed from `email`.
// WorkoutSchema.virtual('totalDuration').get(function() {
//   return this.exercises.add(this.exercises.totalDuration + 1);
// });

// const

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
