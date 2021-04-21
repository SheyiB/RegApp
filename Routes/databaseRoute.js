const express = require('express');
const app = express.Router();
const {home} = require('../Controllers/databaseController');


app.route('/')
.get(home);






module.exports = app;