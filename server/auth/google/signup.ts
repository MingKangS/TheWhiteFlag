import passportLocal from 'passport-local';
const Strategy = passportLocal.Strategy;
import User from '../../models/user';

const SignupStrategy = new Strategy(
  {
    passReqToCallback: true,
    usernameField: "email",
    passwordField: "googleId",
  },
  function (req, email, password, done) {
    User.findOne({ email: req.body.email })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }

        if (!user) {
          let newUser = new User({
            googleId: req.body.googleId,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
          });

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }

            return done(null, inserted);
          });
        }
        if (user) {
          return done("User already exist. Please login!", null);
        }
      });
  }
);

export default SignupStrategy;
