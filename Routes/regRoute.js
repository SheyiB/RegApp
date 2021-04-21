const express = require('express');
const app = express.Router();
const {registerUser,home} = require('../Controllers/regController');


app.route('/')
.post(registerUser)
.get(home);






module.exports = app;