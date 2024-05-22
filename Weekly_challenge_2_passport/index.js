const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./Routes/postRoutes');
const {logging} = require('./Controllers/PostController')
const session = require('express-session')
const passport = require('passport')
const {sessionStore} = require('./Models/db')

app.use(cors({origin: 'http://localhost:5173', credentials : true}))

// app.use(cors({
//     origin: 'http://localhost:5173', // Allow requests from this origin
//     credentials: true // Allow credentials (cookies, authorization headers)
// }));

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

app.listen(4100,()=>{
    console.log("It's Working");
})
