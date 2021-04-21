const express = require('express');
const app = express.Router();
const {submit,index,signin,update} = require('../Controllers/indexController');

app.route('/')
.get(index);

app.route('/submit')
.post(submit);

app.route('/signin')
.post(signin);

app.route('/:update')
.put(update);

module.exports = app;