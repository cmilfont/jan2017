const passport = require('passport');
const crypto = require('crypto');
const Strategy = require('passport-local').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;


module.exports = (app, models) => {

  // passport.use(new FacebookStrategy({
  //     clientID: process.env.FACEBOOK_APP_ID,
  //     clientSecret: process.env.FACEBOOK_APP_SECRET,
  //     callbackURL: "http://localhost:3000/auth/facebook/callback",
  //     profileFields: ['id', 'displayName', 'photos', 'email']
  //   },
  //   function(accessToken, refreshToken, profile, cb) {
  //     models.User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //       return cb(err, user);
  //     });
  //   }
  // ));

  passport.use(new Strategy(
    { passReqToCallback: true, usernameField: 'email' },
    (req, email, password, done) => {
      models.User.findOne({
        where: {
          email,
        },
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'userDontExist' });
        }
          // https://adambard.com/blog/3-wrong-ways-to-store-a-password/
          // https://gist.github.com/skeggse/52672ddee97c8efec269
        crypto.pbkdf2(password, user.get('salt'), 12000, 512, 'sha512', (err, hashRaw) => {
          if (err) {
            return done(null, false, { message: err.message });
          }
          const hash = new Buffer(hashRaw, 'binary').toString('hex');
          return (hash === user.get('hash')) ?
              done(null, user) :
              done(null, false, { message: 'incorrectPasswordError' });
        });
      }).catch(error => done(null, false, { message: error.message }));
    }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.set('passport', passport);
};
