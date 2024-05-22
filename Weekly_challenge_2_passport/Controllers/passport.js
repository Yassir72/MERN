const mongoose = require('mongoose');
const {UserModel} = require('../Models/db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({ usernameField: 'email' },function (email,password,done){ console.log(email);
        UserModel.findOne({email : email})
                .then((user)=>{  console.log(user);
                    if(!user) { console.log("doesn\'t exist");
                    return done(null,false,{message:"This user doesn\'t exist"})}
                    if (user.password==password)
                            return done(null,user)
                    else return done(null,false,{message:"incorrect password"})
                })

    }))


passport.serializeUser((user, done) => { console.log('hh');
    done(null, user.id);
  });
  
passport.deserializeUser((id, done) => { console.log('222');
    UserModel.findById(id)
        .then((user)=>done(null,user))
        .catch((err)=>done(err))
  });

function isAuthenticated (req,res,next){ console.log(req.isAuthenticated());
        if(req.isAuthenticated()) return next();
        else res.send('Please login to access the requested resource!');
}

module.exports = isAuthenticated;