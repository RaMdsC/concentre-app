const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const UserSchema = new mongoose.Schema({
    userName: {
        required: true,
        type: String,
        unique: true
    },
    energyPoints: Number
});

module.exports = mongoose.model('User', UserSchema);
