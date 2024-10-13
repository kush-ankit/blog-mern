const express = require('express');
const { addCommentToBlog } = require('../controllers/commentController');
const { validator } = require('../middleware/reqValidator');

const CommentRouter = express.Router();

CommentRouter.post('/addComment', validator, addCommentToBlog);

module.exports = CommentRouter;