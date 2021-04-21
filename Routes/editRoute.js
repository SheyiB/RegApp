const express = require('express');
const app = express.Router();
const {home} = require('../Controllers/editController');

app.route('/')
.get(home);

module.exports = app;