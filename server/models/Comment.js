const mongoose = require('mongoose');


const Comment = new mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    authorid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    authorName: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    blogid: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
});

module.exports = mongoose.model('Comment', Comment);