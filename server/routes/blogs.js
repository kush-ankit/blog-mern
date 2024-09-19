const express = require('express');
const Blog = require('../models/Blog');
const User = require('../models/User');

const router = express.Router();

// Middleware to check admin status
const checkAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user && user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin access required' });
  }
};

// Create Blog
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Approve Blog
router.patch('/approve/:id', checkAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.status = 'approved';
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Reject Blog
router.patch('/reject/:id', checkAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.status = 'rejected';
    blog.adminComments = req.body.adminComments;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
