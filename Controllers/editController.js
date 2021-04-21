const express = require('express');
const app = express();

function home(req,res){
    res.render('edit', {title : 'Page Edit'});
}

module.exports = {
    home
}