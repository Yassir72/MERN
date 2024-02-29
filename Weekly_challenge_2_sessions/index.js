const express = require('express');
const app = express();
const router = require('./Routes/postRoutes');
const {logging} = require('./Controllers/PostController')
const session = require('express-session');


app.use(logging);
app.use(express.json());
app.use(session({
    secret : '69778757a3c97943d58d5ad54df4fb73931fc816d91d',
    resave : false ,
    saveUninitialized : true
}))

app.use('/',router);

app.use("*",(req,res,next)=>{
    next(new Error("This Path Doesn\'t Exist"));
})

app.use((err,req,res,next)=>{
    res.send(err.message);
})

app.listen(3000,()=>{
    console.log("It's Working");
})
