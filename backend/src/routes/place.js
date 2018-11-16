const express = require('express');

const PlaceModel = require('../models/place.model');

const router = express.Router();

// Get all places within 10 Km radius
router.get('/place', (req, res) => {
    if(!req.query.latitude) {
        return res.status(400).send('Missing URL parameter: "latitude"');
    }
    if(!req.query.longitude) {
        return res.status(400).send('Missing URL parameter: "longitude"');
    }
    // Calculate radius of 10 Km
    /*const d = 10.0;
    const R = 6371e3;
    const c = d / R;
    const a = 2
    PlaceModel.find()
        .where('location')*/
})

// Get specific place
router.get('/place/:id', (req, res) => {
    PlaceModel.findOne({
        id: id
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
    if(!req.body.owner) {
        return res.status(400).send('Field "owner" is required');
    }
    if(!req.body.capacity) {
        return res.status(400).send('Field "capacity" is required');
    }
    if(!req.body.location) {
        return res.status(400).send('Field "location" is required');
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
