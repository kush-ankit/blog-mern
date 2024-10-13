const Blog = require("../models/Blog")

module.exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        return res.status(200).json({ status: true, posts: posts });
    } catch (e) {
        return res.status(500).json({ status: false, message: e.message });
    }
};

module.exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        console.log(req.body);
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
};


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
};

module.exports.likePost = async (req, res) => {
    try {
        let id = req.params.id;
        let uid = req.userid;
        let post = await Blog.findById(id);
        if (!post.likes.includes(uid)) {
            post.likes.push(uid);
            await post.save();
            return res.status(200).json({ status: true, message: 'Post liked successfully', post: post });
        } else {
            return res.status(400).json({ status: false, message: 'You have already liked this post' });
        }
    } catch (error) {
        return res.status(401).json({ status: true, message: "Error liking post" });
    }
};

module.exports.unlikeBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let uid = req.userid;
        let blog = await Blog.findById(id);
        if (blog.likes.includes(uid)) {
            let index = blog.likes.indexOf(uid);
            blog.likes.splice(index, 1);
            await blog.save();
            return res.status(200).json({ status: true, message: 'Post liked successfully', blog: blog });
        } else {
            return res.status(400).json({ status: false, message: 'You have already liked this post' });
        }
    } catch (error) {
        return res.status(401).json({ status: true, message: "Error liking post" });
    }
};


module.exports.userAllBlogs = async (req, res) => {
    try {
        let userid = req.userid;
        const blogs = await Blog.find({ authorid: userid }).sort({ createdAt: -1 });
        if (!blogs) {
            return res.status(400).json({ status: false, message: err });
        } else {
            return res.status(200).json({ status: true, blogs: blogs });
        }
    } catch (error) {
        return res.status(401).json({ status: false, message: "Error fetching user's blogs" });
    }
};

module.exports.getOneBlog = async (req, res) =>{
    try {
        let id = req.params.id;
        let blog = await Blog.findById(id);
        if (!blog) {
            return res.status(400).json({ status: false, message: 'Blog not found' });
        } else {
            return res.status(200).json({ status: true, blog: blog });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};


module.exports.updateBlog = async (req, res) => {
    try {
        let blogid = req.params.id;
        let { title, content } = req.body;
        let blog = await Blog.findByIdAndUpdate(blogid, { title, content }, { new: true });
        if (!blog) {
            return res.status(400).json({ status: false, message: 'Blog not found' });
        } else {
            return res.status(200).json({ status: true, blog: blog });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}