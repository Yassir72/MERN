const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/mydb')
    .then(()=>console.log("Connected to DB"))
    .catch((error)=>console.log("Error : ",error));

const userSchema = new mongoose.Schema({
    name : {type: String , required : true},
    email: {type: String , required : true , unique : true},
    age  : {type: Number },
    createdAt : {type: Date , default : mongoose.now}
})

const User = new mongoose.model('user',userSchema);

// const newUser = new User({
//     name: "Mike Ross3",
//     email: "mike.ross3@arkx.group",
//     age: 30
// });

// newUser
//     .save()
//     .then((user)=>console.log("User created successfully :", user))
//     .catch((error)=>console.log("Error : ",error))

deletebyTime(User,10);


function fetch_byEmail(User,email){
    User.findOne({email : email})
        .then((user)=>{ if(user) console.log(user);
                        else console.log("user not found");})
        .catch((error)=>console.log("Error : ",error))

} 

function fetch_byName(User,name){
    User.findOne({name : name})
        .then((user)=>{ if(user) console.log(user);
                        else console.log("user not found");})
        .catch((error)=>console.log("Error : ",error))

} 

function fetchAll(User){
    User.find({})
        .then((user)=> console.log(user))
        .catch((error)=>console.log("Error : ",error))

} 

function UpdateEmail(User,name,email){
    User.findOneAndUpdate(
        {name : name},
        {$set : {email : email}} ,
        {new : true}
        )
        .then((user)=>{
            if(user) console.log("User updated successfully : ",user);
            else console.log("User not found");
        })
        .catch((error)=>console.log("Error : ",error))
}


function deletebyTime(User,days){
    let time = new Date() ;
    time = new Date(time.getTime()-days*24*60*60*1000);
        User.deleteMany({createdAt : {$lt: time}})
        .then((user)=>{
            if(user) console.log(user.deletedCount , " are deleted");
            else console.log("user not found");
        })
        .catch((error)=>console.log("error : ",error));
    
}