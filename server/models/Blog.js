const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
  adminComments: { type: String }
});

module.exports = mongoose.model('Blog', BlogSchema);
