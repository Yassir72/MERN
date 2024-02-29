const {getAllPosts,createPost} = require('../Models/Post')

function addPost(req,res){
    data =getAllPosts('./texte.json');
    console.log(data);

    console.log(req.body);
    data.push(req.body);
    data[1].id = 2;
    console.log("new data ", data);
    createPost('texte.json',JSON.stringify(data));
    res.send('Post Added');
}

function seePosts(req,res){ 
    res.send(getAllPosts('./texte.json'));
}

function check_exist(id,data){
    for(let i=0;i<data.length;i++){
        if(data[i].id==id) return true;
    }
}

function deletePost(req,res){
    let data =getAllPosts('./texte.json');
        console.log(data);
    if(check_exist(Number(req.params.id),data)){
        for(let i=0;i<data.length;i++){
            if(data[i].id==Number(req.params.id))
            data.splice(i,1)
        }
        createPost('texte.json',JSON.stringify(data));
        res.send('Done');
    }
    else {
        res.send("Post Not Found");
    }
}

function editPost(req,res){
        let data =getAllPosts('./texte.json');
        console.log(data);
        let position;
        console.log(check_exist(Number(req.params.id),data));
    if(check_exist(Number(req.params.id),data)){
        for(let i=0;i<data.length;i++){
            if(data[i].id==Number(req.params.id)) position=i;}
        data[position] =Object.assign({id : req.params.id},req.body);
        createPost('texte.json',JSON.stringify(data));
        res.send('Done');
    }
    else {
        res.send("Post Not Found");
    }
    
}

function addUser(req,res){
    
    let data =getAllPosts('./Users.json');
    data.push(req.body);
    createPost('Users.json',JSON.stringify(data));
    res.send('User Added');
}

function signUp(req,res){ 
    if(req.body.username.length<=5 || req.body.username!=req.body.username.trim()){
        res.send("The username Should be longer than 5 characters and without blank spaces")
    }
    if(req.body.password.length<=5 || req.body.password!=req.body.password.trim()){
        res.send("The password Should be longer than 5 characters and without blank spaces")
    }
    addUser(req,res);
}

function logging(req,res,next){
    console.log(`${new Date().toISOString().split('T')[0]} ${new Date().toISOString().split('T')[1].split('.')[0]} : ${req.method} : ${req.url}`);
    next();
}

function signIn(req,res){ 
    let users_data =getAllPosts('./Users.json');
    let data =getAllPosts('./texte.json');
    if(users_data.find(x=>x.username==req.body.username)){
        for(let i=0;i<users_data.length;i++){
            if(users_data[i].username==req.body.username && users_data[i].password==req.body.password){
                req.session.username=req.body.username;
                res.send(data);
                break;
            }
        }
    }
    else {
        res.send("Incorrect Credentials");
    }
}

function logOut(req,res){
    req.session.destroy();
    res.send('session destroyed');
}



module.exports = {logging,addPost,seePosts,editPost,deletePost,signUp,signIn,logOut};