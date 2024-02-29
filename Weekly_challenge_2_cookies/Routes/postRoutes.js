const express = require('express');
const router = express.Router();
const {addPost,seePosts,editPost,deletePost,signUp,signIn,cookie_val, logOut} = require('../Controllers/PostController')


router.get('/',cookie_val,seePosts);
router.post('/',addPost);
router.put('/:id',editPost);
router.delete('/:id',deletePost);
router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.get('/logOut',logOut);

module.exports = router;