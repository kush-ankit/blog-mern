const express = require('express');
const { addCommentToBlog, getAllCommentByBlogid } = require('../controllers/commentController');
const { validator } = require('../middleware/reqValidator');

const CommentRouter = express.Router();

CommentRouter.post('/addComment/:id', validator, addCommentToBlog);
CommentRouter.get('/getAllComments/:id', getAllCommentByBlogid);

module.exports = CommentRouter;