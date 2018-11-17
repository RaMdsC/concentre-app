const express = require('express');

const UserModel = require('../models/user.model');

const router = express.Router();

// Get specific user
router.get('/user/:name', (req, res) => {
    UserModel.findOne({
        userName: req.params.name
    }).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.status(500).json(err);
    });
});

// Create a user
router.post('/user', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing');
    }
    if(!req.body.userName) {
        return res.status(400).send('Field "userName" is required');
    }
    new UserModel(req.body).save()
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
