const mongoose = require('mongoose');
const {UserModel} = require('../Models/db')

function signUp(req,res){  
    UserModel.findOne({email : req.body.email}).then((user)=>{ 
    if(user) return res.status(401).send("Try Another Email");
    else  UserModel.create(req.body);
        res.status(200).send('welcome');
     })
    
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