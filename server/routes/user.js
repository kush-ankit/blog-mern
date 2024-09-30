const express = require('express');
const { validator } = require('../middleware/reqValidator');
const User = require('../models/User');
const { profile } = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/profile', validator, profile)

module.exports = userRoutes;