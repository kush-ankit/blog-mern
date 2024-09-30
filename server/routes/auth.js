const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { login, register, validate } = require('../controllers/authController');


const authRoutes = express.Router();


authRoutes.post('/valid', validate)


authRoutes.post('/register', register);


authRoutes.post('/login', login);


module.exports = authRoutes;