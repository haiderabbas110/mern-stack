/* import express from "express";
import passport from 'passport';
import session from "express-session";
import facebookStrategy from 'passport-facebook'

const _facebookStrategy = facebookStrategy.Strategy;

const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'thisissectret',
  resave: false,
  saveUninitialized: false

}))
//app.use(passport.session());

passport.use(new _facebookStrategy({
  clientID: 551692553131393,
  clientSecret: '1f211708ce869676bbbe39e3295d48d8',
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'name', 'gender']
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
));

app.get('/', (req, res) => {
  res.send("hello");
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/facebook/callback', passport.authenticate('facebook', {

  successRedirect: "/profile",
  failureRedirect: "/failed"

}));

app.get('/profile', (req, res) => {

  res.send("You are a valid user");

})
app.get('/failed', (req, res) => {

  res.send("You are not valid user");

});

passport.serializeUser(function (user, done) {
  done(null, user)
});

passport.deserializeUser(function (id, done) {
  return done(null, id);
})

app.listen(3000); */


import express from "express"
import session from "express-session"
import passport from "passport"
import passportFacebook from 'passport-facebook';

var FacebookStrategy = passportFacebook.Strategy;
const app = express()

const port = 3000
app.use(session({ name: "haiderid", secret: 'abc' }));
app.use(passport.session());

passport.use(new FacebookStrategy({
  /* clientID: 367361995459681,
  clientSecret: "582fed76cff6453955d07557393e8ff5",
  callbackURL: "http://localhost:3000/auth/facebook/callback" */
  clientID: 1167069413854243,
  clientSecret: '4bd8e54032da0c32afd904220a99bae6',
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'name', 'gender']
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile)
    done(null, {profile: profile})

  }
));
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { scope: ['email'] }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
app.listen(port)