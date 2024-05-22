const mongoose = require('mongoose');
const {PostModel} = require('../Models/db')


async function addPost(req,res){
    
    await PostModel.create(req.body)
    res.send('Post Added');
}

async function seePosts(req,res){ 
    res.send(await PostModel.find({}));
}

async function seePost(req,res){ 
            console.log(req.body.title);
    res.send(await PostModel.findOne( {title : req.body.title}));
}


async function deletePost(req,res){ console.log(req.body);
    await PostModel.deleteOne({title : req.body.title})
                    .then((user)=>console.log(user));
    res.send("done")
}

async function editPost(req,res){
    if(req.body.title){
        if(req.body.newtitle){
        await PostModel.findOneAndUpdate(
            {title : req.body.title},
            {$set : {title : req.body.newtitle}})
        }
        if(req.body.index && req.body.newheading){
            let fieldName = `content.${req.body.index-1}.heading`;
            let searchValue = req.body.newheading;
            let queryHeading = {};
            queryHeading[fieldName] = searchValue;
            console.log(queryHeading);

        await PostModel.findOneAndUpdate(
                {title : req.body.title},
                {$set : queryHeading})
        }
        if(req.body.index && req.body.newdescription){
            let queryDesciption ={};
            let fieldName1 = `content.${req.body.index-1}.desciption`;
            let searchValue1 = req.body.newdescription;
            queryDesciption[fieldName1] = searchValue1;
            console.log(queryDesciption);
        
        await PostModel.findOneAndUpdate(
                {title : req.body.title},
                {$set : queryDesciption})
        }
    }
    else res.send("please give me the title of the post that you want to edit")
}


function logging(req,res,next){
    console.log(`${new Date().toISOString().split('T')[0]} ${new Date().toISOString().split('T')[1].split('.')[0]} : ${req.method} : ${req.url}`);
    next();
}






module.exports = {logging,addPost,seePosts,editPost,deletePost,seePost};