const express = require('express');
const router = express.Router();
const {addPost,seePosts,editPost,deletePost,signUp} = require('../Controllers/PostController')


router.get('/',seePosts);
router.post('/',addPost);
router.put('/:id',editPost);
router.delete('/:id',deletePost);
router.post('/signUp',signUp)

module.exports = router;