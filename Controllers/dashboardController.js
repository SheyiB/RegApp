const express = require('express');
const app = express();


function home(req,res){
    res.render("dashboard", {title: "Dashboard"});
}


module.exports = {
    home,
}