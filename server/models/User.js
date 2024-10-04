const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: "Guest" },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true},
  profilePicture: { type: String},
  password: { type: String, required: true },
  bio:{ type: String, default:"Hey there! I am using Blog App."},
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
