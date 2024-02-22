const express = require('express');
const app = express();
const router = require('./Routes/postRoutes');
const {logging} = require('./Controllers/PostController')


app.use(logging);
app.use(express.json());

app.use('/',router);

app.use("*",(req,res,next)=>{
    next(new Error("This Path Doesn\'t Exist"));
})

app.use((err,req,res,next)=>{
    res.send(err.message);
})

app.listen(4000,()=>{
    console.log("It's Working");
})
