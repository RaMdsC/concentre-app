const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const PlaceSchema = new mongoose.Schema({
    id: Number,
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
