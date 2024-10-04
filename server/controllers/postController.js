const Blog = require("../models/Blog")

module.exports.getAllPosts = async (req, res, next) => {
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
            const newBlog = new Blog({ title, content, authorid: req.userid, authorName: req.userName });
            await newBlog.save();
            return res.status(201).json({ status: true, blog: newBlog });
        } else {
            return res.status(400).json({ status: false, message: 'Title and content are required.' });
        }
    } catch (e) {
        return res.status(401).json({ status: false, message: e.message });
    }
}


module.exports.deletePost = async (req, res) => {
    try {
        let id = req.params.id;
        let uid = req.userid;
        let { authorid } = await Blog.findById(id);
        console.log(typeof uid, typeof author, { "author": authorid, "uid": uid });
        if (uid == authorid) {
            await Blog.findByIdAndDelete(id);
            return res.status(200).json({ status: true, message: 'Post deleted successfully' });
        } else {
            return res.status(401).json({ status: false, message: 'Unauthorized to delete this post' });
        }
    } catch (error) {
        return res.status(401).json({ status: true, message: "Error deleting post" });
    }
}