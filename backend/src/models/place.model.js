const mongoose = require('mongoose');
const env = require('../env');

mongoose.connect(env.db);

const PlaceSchema = new mongoose.Schema({
    idPlace: Number,
    owner: {
        required: true,
        type: String
    },
    capacity: {
        required: true,
        type: Number
    },
    dateAdded: Date,
    latitude: {
        required: true,
        type: Number
    },
    longitude: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Place', PlaceSchema);
