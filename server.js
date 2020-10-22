const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const addApiRoutes = require("./routes/api-routes.js");
const addHtmlRoutes = require("./routes/html-routes.js");
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopolgy: true,
  useCreatedIndex: true,
  useFindAndModify: false
});

// Sets up the Express app to handle data parsing
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))


// Static directory
// app.use(express.static("public"));

// Routes
addApiRoutes(app);
addHtmlRoutes(app);

// app.get("*", (req, res) =>{
//     res.send("<h1>Hello, World!</h1>");
// });


  app.listen(PORT, () => {
    console.log(`App listening on PORT ${ PORT}`);
  });

