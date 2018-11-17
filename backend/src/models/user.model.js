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
    interests: {
        required: true,
        type: Array
    },
    name: {
        required: true,
        type: String
    },
    rating: {
        default: 0,
        type: Number
    },
    opinions: {
        default: [],
        type: Array
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
