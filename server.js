const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const addPostApiRoutes = require("./routes/post-api-routes.js");
// const addAuthorApiRoutes = require("./routes/author-api-routes.js");
const addHtmlRoutes = require("./routes/html-routes.js");
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))
// Requiring our models for syncing
// const db = require("./models");

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Static directory
// app.use(express.static("public"));

// Routes
// addAuthorApiRoutes(app);
// addPostApiRoutes(app);
 addHtmlRoutes(app);

// app.get("*", (req, res) =>{
//     res.send("<h1>Hello, World!</h1>");
// });

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${ PORT}`);
  });
// });
