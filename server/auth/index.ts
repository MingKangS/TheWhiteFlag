import passport from "passport";
import User from "../models/user";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (email, done) {
  User.findOne({ email }).exec((err, user) => {
    done(err, user);
  });
});

import GoogleLogin from "./google/signin";
import GoogleRegister from "./google/signup";

passport.use("google-signin", GoogleLogin);
passport.use("google-signup", GoogleRegister);

export default passport;
