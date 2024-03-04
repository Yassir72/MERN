const express = require('express');
const router = express.Router();
const {addPost,seePosts,editPost,deletePost,seePost} = require('../Controllers/PostController')
const {signUp,logOut} = require('../Controllers/UserController')
const passport = require('passport')
const isAuthenticated = require('../Controllers/passport')





router.post('/signIn',passport.authenticate('local', {
    successRedirect: '/seeAll',
    failureRedirect: '/logmsg',
    failureMessage : true 
  }));
router.get('/logmsg',(req,res,next)=>{  res.send(req.session.messages[req.session.messages.length-1]);})
router.get('/seeAll',isAuthenticated,seePosts);
router.post('/seeOne',isAuthenticated,seePost);
router.post('/addPost',isAuthenticated,addPost);
router.put('/edit',isAuthenticated,editPost);
router.delete('/delete',isAuthenticated,deletePost);
router.post('/signUp',signUp);
router.get('/logOut',isAuthenticated,logOut);

module.exports = router;