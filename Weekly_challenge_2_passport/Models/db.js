const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();
mongoose
    .connect(process.env.URI)
    .then(()=>console.log("Connected to DB"))
    .catch((error)=>console.log("Error : ",error))

const sessionStore = new MongoDBStore({
    uri: process.env.URI,
    collection: 'sessions'
});

const UserSchema = new mongoose.Schema({
    username : { type : String , required: true },
    email : { type : String , required: true },
    password : { type : String , required: true },
}, {timestamps : true} )

const UserModel = new mongoose.model('User',UserSchema);

const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: [{
        heading : {
            type: String,
            required: true,
          },
        description : {
            type: String,
            required: true,
        }
    }],
    author: {
        type: String,
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  }) 

const PostModel = new mongoose.model('Post',PostSchema);


module.exports = {UserModel, PostModel,sessionStore};

