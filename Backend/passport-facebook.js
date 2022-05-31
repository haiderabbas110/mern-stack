import express from "express";
import passport from 'passport';
import session from "express-session";
import facebookStrategy from 'passport-facebook'

const _facebookStrategy = facebookStrategy.Strategy;

const app = express();

app.use(passport.initialize());
// app.use(passport.session());
app.use(session({
  secret:'thisissectret',
  
}))
app.use(passport.session());

passport.use(new _facebookStrategy({
  clientID: 551692553131393,
  clientSecret: '1f211708ce869676bbbe39e3295d48d8',
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields:['id','displayName','name','gender']
},
function(accessToken, refreshToken, profile, done) {
  console.log(profile);
  return done(null,profile);
}
));

app.get('/',(req,res)=>{
  res.send("hello");
});

app.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}));

app.get('/facebook/callback',passport.authenticate('facebook',{
  
  successRedirect:"/profile",
  failureRedirect:"/failed"

}));

app.get('/profile',(req,res)=>{

  res.send("You are a valid user");

})
app.get('/failed',(req,res)=>{

  res.send("You are not valid user");

});

passport.serializeUser(function(user,done){
  done(null,user)
});

passport.deserializeUser(function(id,done){
  return done(null,id);
})

app.listen(3000);