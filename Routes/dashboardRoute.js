const express = require('express');
const app = express.Router();
const {home} = require('../Controllers/dashboardController');


app.route('/')
.get(home);






module.exports = app;