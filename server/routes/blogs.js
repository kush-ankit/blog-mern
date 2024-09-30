const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const { validator } = require('../middleware/reqValidator');

const router = express.Router();

router.get('/all', getAllPosts);
router.post('/create', validator, createPost);

module.exports = router;