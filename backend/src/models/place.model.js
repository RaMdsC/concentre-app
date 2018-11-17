const mongoose = require('mongoose');
const env = require('../env');

mongoose.connect(env.db);

const PlaceSchema = new mongoose.Schema({
    idPlace: {
        default: env.randomId(),
        type: String
    },
    capacity: {
        required: true,
        type: Number
    },
    dateAdded: {
        default: new Date(),
        type: Date
    },
    description: {
        required: true,
        type: String
    },
    distance: {
        required: true,
        type: Number
    },
    imagePath: {
        required: true,
        type: [String]
    },
    owner: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    rating: {
        default: 0,
        type: Number
    }
});

module.exports = mongoose.model('Place', PlaceSchema);
