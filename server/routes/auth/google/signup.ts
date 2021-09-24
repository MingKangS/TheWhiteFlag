import express from "express";
const signup = express.Router();

import passport from "../../../auth/"
// const passport = require("../../../auth/");

signup.post("/signup", (req, res) => {
  passport.authenticate("google-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }
    req.logIn(user, function (error) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
      return res.json(user);
    });
  })(req, res);
});

export default signup;
