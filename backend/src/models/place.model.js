const mongoose = require('mongoose');
const env = require('../env');

mongoose.connect(env.db);

const PlaceSchema = new mongoose.Schema({
    idPlace: Number,
    capacity: {
        required: true,
        type: Number
    },
    dateAdded: Date,
    description: String,
    distance: Number,
    imagePath: String,
    owner: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    rating: Number
});

module.exports = mongoose.model('Place', PlaceSchema);
