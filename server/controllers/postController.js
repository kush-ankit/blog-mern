const Blog = require("../models/Blog")

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Blog.find();
        return res.status(200).json({ status: true, posts: posts });
    } catch (e) {
        return res.status(500).json({ status: false, message: e.message });
    }
}

module.exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (title && content) {
            const newBlog = new Blog({ title, content, author: req.userid });
            await newBlog.save();
            return res.status(201).json({ status: true, blog: newBlog });
        } else {
            return res.status(400).json({ status: false, message: 'Title and content are required.' });
        }
    } catch (e) {
        return res.status(401).json({ status: false, message: e.message });
    }
}


