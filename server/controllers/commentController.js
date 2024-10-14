const Comment = require("../models/Comment");

module.exports.addCommentToBlog = async (req, res) => {
    try {
        let blogid = req.params.id;
        let userid = req.userid;
        let userName = req.userName;
        let { content } = req.body;
        if (!content) {
            return res.status(401).json({ status: false, message: 'Comment is required' });
        }
        let comment = new Comment({ content, authorid: userid, authorName: userName, blogid });
        await comment.save();
        return res.status(200).json({ status: true, comment });
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}


module.exports.getAllCommentByBlogid = async (req, res) => {
    try {
        let blogid = req.params.id;
        let comments = await Comment.find({ blogid });
        if (!comments) {
            return res.status(401).json({ status: false, message: 'No comments found' });
        } else {
            return res.status(200).json({ status: true, comments: comments });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}