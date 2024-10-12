const express = require('express');
const { createPost, getAllPosts, deletePost, likePost, userAllBlogs, unlikeBlog, getOneBlog, updateBlog } = require('../controllers/postController');
const { validator } = require('../middleware/reqValidator');

const router = express.Router();

router.get('/all', getAllPosts);
router.post('/create', validator, createPost);
router.delete('/delete/:id', validator, deletePost);
router.get('/likePost/:id', validator, likePost);
router.get('/userAllBlogs', validator, userAllBlogs);
router.get('/unlikeBlog/:id', validator, unlikeBlog);
router.get('/getOneBlog/:id', getOneBlog);
router.patch('/updateBlog/:id', validator, updateBlog);

module.exports = router;