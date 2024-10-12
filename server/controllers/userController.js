const User = require("../models/User");

module.exports.profile = async (req, res) => {
    try {
        let id = req.userid;
        if (id) {
            const user = await User.findById(id);
            return res.status(201).json({ status: true, profile: user });
        } else return res.status(403).json({ status: false, message: 'id not found in validation' })
    } catch (e) {
        res.status(403).json({ status: false, message: e.message });
    }
}

module.exports.authorDetails = async (req, res) => {
    try {
        const authorId = req.params.id;
        const { name, userName, email, bio, createdAt } = await User.findById(authorId);
        if (!name) return res.status(404).json({ status: false, message: 'Author not found' });
        return res.status(200).json({ status: true, author: { name, userName, email, bio, createdAt } });
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}