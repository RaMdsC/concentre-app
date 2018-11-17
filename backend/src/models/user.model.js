const mongoose = require('mongoose');
const env = require('../env');

mongoose.connect(env.db);

const UserSchema = new mongoose.Schema({
    energyPoints: {
        default: 0,
        type: Number
    },
    imagePath: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    surname: {
        required: true,
        type: String
    },
    userName: {
        required: true,
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('User', UserSchema);
