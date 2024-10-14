const express = require('express');
const { validator } = require('../middleware/reqValidator');
const { profile, authorDetails } = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/profile', validator, profile);
userRoutes.get('/authorDetails/:id', authorDetails)

module.exports = userRoutes;