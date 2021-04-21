const express = require('express');
const app = express();

function home(req,res){
    res.render("Database", {title: "Database"});
}

module.exports = {
    home
}