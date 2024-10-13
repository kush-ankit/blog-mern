const Comment = require("../models/Comment");


module.exports.addCommentToBlog = async (req, res) => {
    try {
        let blogid = req.params.id;
        let userid = req.userid;
        let userName = req.userName;
        let { content } = req.body;
        console.log(content);
        
        if (!content) {
            return res.status(401).json({ status: false, message: 'Comment is required' });
        }
        let blog = new Comment({ content, authorid: userid, authorName: userName, blogid });
        await blog.save();
        return res.status(200).json({ status: true, blog: blog });
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}