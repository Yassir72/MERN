const mongoose = require('mongoose');
const {UserModel} = require('../Models/db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(function (username,password,done){
        UserModel.findOne({username : username})
                .then((user)=>{  console.log(user);
                    if(!user) { console.log("doesn\'t exist");
                    return done(null,false,{message:"This user doesn\'t exist"})}
                    if (user.password==password)
                            return done(null,user)
                    else return done(null,false,{message:"incorrect password"})
                })

    }))


passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser((id, done) => {
    UserModel.findById(id)
        .then((user)=>done(null,user))
        .catch((err)=>done(err))
  });

function isAuthenticated (req,res,next){
        if(req.isAuthenticated()) return next();
        res.send('Please login to access the requested resource!');
}

module.exports = isAuthenticated;