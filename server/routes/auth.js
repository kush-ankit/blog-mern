const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authRoutes = express.Router();

authRoutes.use((req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            next()
        } else {
            jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
                if (err) return res.status(403).json({ message: 'Invalid token' });
                res.header('token', token).status(201).json(await User.findById(user.id).exec())
            });
        }
    } catch (e) {
        res.status(401).json({ message: e.message });
    }
})


authRoutes.post('/register', async (req, res) => {
    try {
        const { email, password, name } = await req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, name });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

authRoutes.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.header('token', token).send("User logged in successfully");
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});


module.exports = authRoutes;