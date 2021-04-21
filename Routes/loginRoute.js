const express = require('express');
const app = express.Router();
const {home} = require('../Controllers/loginController');


app.route('/')
.get(home);






module.exports = app;