const express = require('express');
const app = express();


function home(req,res){
    res.render("News",  {title: "News"});
}


module.exports = {
    home,
}