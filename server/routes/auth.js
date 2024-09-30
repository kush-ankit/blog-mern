const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const authRoutes = express.Router();


authRoutes.post('/valid', (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ status: false });
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.status(403).json({ status: false });
            else {
                const userd = await User.findById(user.id).exec()
                if (userd) return res.status(201).json({ status: true, user: userd });
                else return res.status(403).json({ status: false });
            }
        });
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
        res.status(201).json({ status: true, user: newUser });
    } catch (e) {
        res.status(400).json({ status: false, message: e.message });
    }
});


authRoutes.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ status: false, message: 'Invalid credentials' });
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie('token', token).json({ status: true, user: user });
    } catch (e) {
        res.status(400).json({ status: false, message: e.message });
    }
});


module.exports = authRoutes;