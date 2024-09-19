const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema);
