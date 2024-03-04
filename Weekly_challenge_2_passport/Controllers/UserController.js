const mongoose = require('mongoose');
const {UserModel} = require('../Models/db')

function signUp(req,res){ 
    if(req.body.username.length<=5 || req.body.username!=req.body.username.trim()){
        res.send("The username Should be longer than 5 characters and without blank spaces")
    }
    else if(req.body.password.length<=5 || req.body.password!=req.body.password.trim()){
        res.send("The password Should be longer than 5 characters and without blank spaces")
    }
    else UserModel.create(req.body);
    res.send('welcome');
}

// function signIn(req,res){ 
//     UserModel.findOne({username : req.body.username})
//             .then((user)=>{
//                 if(!user) res.send('incorrect username')
//                 else {
//                     if(user.password != req.body.password) res.send('Incorrect Password')
//                     else res.redirect('/see')
//                 }
//             })
//             .catch((error)=>console.log("Error: ",error))
        
//     }

function logOut(req,res){
    req.logout(()=>{});
    res.send('cleared');
}

module.exports = {signUp,logOut};