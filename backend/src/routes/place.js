const express = require('express');

const PlaceModel = require('../models/place.model');

const router = express.Router();

// Get all places
router.get('/places', (req, res) => {
    PlaceModel.find({})
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Get specific place
router.get('/place/:idPlace', (req, res) => {
    PlaceModel.findOne({
        idPlace: idPlace
    }).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// Create a place
router.post('/place', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing');
    }
    if(!req.body.capacity) {
        return res.status(400).send('Field "capacity" is required');
    }
    if(!req.body.owner) {
        return res.status(400).send('Field "owner" is required');
    }
    if(!req.body.price) {
        return res.status(400).send('Field "price" is required');
    }
    new PlaceModel(req.body).save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(201).send(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
