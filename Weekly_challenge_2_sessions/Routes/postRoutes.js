const express = require('express');
const router = express.Router();
const {addPost,seePosts,editPost,deletePost,signUp,signIn, logOut} = require('../Controllers/PostController')

const check1 = (req,res,next)=>{
    if(req.session.username) next();
    else res.send('signIn First');
};
router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.get('/logOut',logOut);
router.get('/',check1,seePosts);
router.post('/',check1,addPost);
router.put('/:id',check1,editPost);
router.delete('/:id',check1,deletePost);


module.exports = router;