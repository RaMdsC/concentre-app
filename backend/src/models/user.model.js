const mongoose = require('mongoose');
const env = require('../env');

mongoose.connect(env.db);

const UserSchema = new mongoose.Schema({
    userName: {
        required: true,
        type: String,
        unique: true
    },
    energyPoints: Number
});

module.exports = mongoose.model('User', UserSchema);
