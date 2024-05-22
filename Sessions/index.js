const express = require('express');
const session = require('express-session');
const app = express();

let users = [
    {
      username: 'yassir',
      password: 'yassir123',
    },
  ];
app.use(express.json());
app.use(session({
    secret : '69778757a3c97943d58d5ad54df4fb73931fc816d91d',
    resave : false,
    saveUninitialized : true
}))

app.get('/',(req,res)=>{res.send('welcome')});

app.post('/register',(req,res)=>{
    const {username,password}= req.body;
    users.push({username : username,password : password});
    console.log(users);
    req.session.username = username;
    console.log("session variable is set");
    res.redirect('/logIn');
})

app.post('/logIn',(req,res)=>{ 
    if(users.find((x)=>{if(x.username==req.body.username && x.password==req.body.password)
                        return x;   }))
       { req.session.username=req.body.username;
        res.redirect('/protected');}
    else {
        res.send("Incorrect credentials")
    }
    
})

app.get('/logOut',(req,res)=>{
    req.session.destroy();
    res.send('You are Out');
})

app.use((req,res,next)=>{
    if(req.session.username) next();
    else{ res.redirect('logIn'); }
})

app.get('/protected',(req,res)=>{
    res.send('This is a secret place');
    }
)



app.listen(3000,()=>{
    console.log('The server is ON');
})