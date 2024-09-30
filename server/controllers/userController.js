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