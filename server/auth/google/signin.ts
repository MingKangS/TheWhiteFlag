import passportLocal from 'passport-local';
const Strategy = passportLocal.Strategy;
import User from '../../models/user';

const LoginStrategy = new Strategy(
  { usernameField: "email", passwordField: "googleId" },
  function (email, password, done) {
    // User.findOne({ email })
    //   .lean()
    //   .exec((err, user) => {
    //     if (err) {
    //       return done(err, null);
    //     }

    //     if (!user) {
    //       return done("No user found", null);
    //     }

    //     const isPasswordValid = password === user.googleId;

    //     if (!isPasswordValid) {
    //       return done("Google authentication failed", null);
    //     }

    //     return done(null, user);
    //   });
  }
);

export default LoginStrategy;
