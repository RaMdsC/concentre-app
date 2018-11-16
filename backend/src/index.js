const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const userRoute = require('./routes/user');
const placeRoute = require('./routes/place');

const app = express();
const port = process.env.port || 3000;

// For parsing JSON
app.use(bodyParser.json());

// Timestamp for every request
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

app.use(userRoute);
app.use(placeRoute);
app.use(express.static('public'));

// Handler for 404
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/404.html'));
});

// Handler for 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
});

app.listen(port, () => console.log('Server running on port 3000'));
