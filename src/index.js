const express = require("express");

//library read file .env
require('dotenv').config();

const { engine } = require("express-handlebars");

const morgan = require("morgan");

const path = require("path");

const methodOverride = require("method-override");

const route = require("./routes/web");

//conect to db
const db = require("./config/db");
db.connect();


const app = express();

//use method override
app.use(methodOverride("_method"));

// Settings static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    partialsDir: path.join(__dirname, "resources", "views", "layouts"),
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// method
route(app);

app.listen(process.env.PORT || 3002, () => {
  console.log(`App listening on port ${process.env.PORT || 3002}!`);
});
