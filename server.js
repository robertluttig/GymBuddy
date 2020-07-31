const express = require("express");
// const addPostApiRoutes = require("./routes/post-api-routes.js");
// const addAuthorApiRoutes = require("./routes/author-api-routes.js");
// const addHtmlRoutes = require("./routes/html-routes.js");

const app = express();
const PORT = process.env.PORT || 8080;

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
// addHtmlRoutes(app);

app.get("*", (req, res) =>{
    res.send("<h1>Hello, World!</h1>");
});

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${ PORT}`);
  });
// });
