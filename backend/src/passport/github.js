require("dotenv").config();
const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    {
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      clientID: process.env.GITHUB_CLIENT_ID
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubId: profile.id }).then(user => {
        if (user) {
          console.log("user already exists, logging in");
          done(null, user);
        } else {
          console.log("user does not exists, signing up");

          const { displayName: name, username, id: githubId } = profile;
          const { avatar_url: avatar } = profile._json;

          const newUser = new User({
            githubId,
            name,
            username,
            avatar
          });

          newUser.save();

          done(null, newUser);
        }
      });
    }
  )
);
