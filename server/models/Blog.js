const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
  status: { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Blog', BlogSchema);
