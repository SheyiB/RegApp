const express = require('express');
const app = express();

function home(req,res){
    
    res.render("Login", {title: "Login"});
    
}

module.exports = {
    home
}