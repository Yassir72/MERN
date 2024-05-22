const express = require('express');
const router = express.Router();
const {addPost,seePosts,editPost,deletePost,seePost} = require('../Controllers/PostController')
const {signUp,logOut} = require('../Controllers/UserController')
const passport = require('passport')
const isAuthenticated = require('../Controllers/passport')





// router.post('/signIn',passport.authenticate('local', (err,req,res)=>{res.send(true)}));
router.post('/signIn', (req, res, next) => {
  // Use passport.authenticate middleware with 'local' strategy
  passport.authenticate('local', (err, user, info) => {
      if (err) {
          // Handle error
          return res.status(500).send('Internal Server Error');
      }
      if (!user) {
          // Authentication failed
          return res.status(401).send('Authentication Failed');
      }

      // If authentication successful, log in the user
      req.login(user, (loginErr) => {
          if (loginErr) {
              // Handle login error
              return res.status(500).send('Login Error');
          }
          // Authentication successful, send response
          return res.send(true);
      });
  })(req, res, next); // Invoke passport.authenticate with req, res, next
});
router.get('/logmsg',(req,res,next)=>{  res.send(req.session.messages[req.session.messages.length-1]);})
router.get('/seeAll',isAuthenticated,seePosts);
router.post('/seeOne',isAuthenticated,seePost);
router.post('/addPost',isAuthenticated,addPost);
router.put('/edit',isAuthenticated,editPost);
router.post('/delete',isAuthenticated,deletePost);
router.post('/signUp',signUp);
router.get('/logOut',isAuthenticated,logOut);

module.exports = router;