const express = require('express');

// Import our modular router for /notes
const notessRouter = require('../public/pages/notes');


const app = express();

app.use('/notes', notessRouter);

module.exports = app;
