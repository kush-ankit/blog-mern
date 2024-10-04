const express = require('express');
const { createPost, getAllPosts, deletePost } = require('../controllers/postController');
const { validator } = require('../middleware/reqValidator');

const router = express.Router();

router.get('/all', getAllPosts);
router.post('/create', validator, createPost);
router.delete('/delete/:id', validator, deletePost);

module.exports = router;