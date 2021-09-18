require("dotenv").config();
require("./mongoose/db");
const express = require("express");
const app = express();

const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");

const passport = require("./auth");

app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.MONGO_SECRET,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", require("./routes"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));