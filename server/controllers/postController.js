const Blog = require("../models/Blog")

exports.getAllPosts = (req, res, next) => {
    try {
        const posts = Blog.find();
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json({ message: "Error retrieving posts", e });
    }
}