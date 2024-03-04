const express = require('express');
const app = express();
const router = require('./Routes/postRoutes');
const {logging} = require('./Controllers/PostController')
const session = require('express-session')
const passport = require('passport')
const {sessionStore} = require('./Models/db')


app.use(express.json());
app.use(session({ 
    secret: 'secret',
    resave: false, 
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
            }
    }))
app.use(passport.initialize())
app.use(passport.session())
app.use(logging);


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
