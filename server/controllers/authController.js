const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ status: false, message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, userName: user.userName }, process.env.JWT_SECRET);
        res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: 'none' }).json({ status: true, user: user });
    } catch (e) {
        res.status(400).json({ status: false, message: e.message });
    }
}

module.exports.register = async (req, res) => {
    try {
        const userDetails = await req.body;
        const hashedPassword = await bcrypt.hash(userDetails.password, 10);
        const newUser = new User({ email: userDetails.email, password: hashedPassword, userName: userDetails.userName, name: userDetails?.name, bio: userDetails?.bio });
        await newUser.save();
        res.status(201).json({ status: true, user: newUser });
    } catch (e) {
        res.status(400).json({ status: false, message: e.message });
    }
}


module.exports.validate = (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token)
        if (!token) {
            return res.status(401).json({ status: false, message: 'token not found' });
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.status(401).json({ status: false });
            else {
                const userd = await User.findById(user.id).exec()
                if (userd) return res.status(201).json({ status: true, user: userd });
                else return res.status(401).json({ status: false });
            }
        });
    } catch (e) {
        res.status(401).json({ message: e.message });
    }
}