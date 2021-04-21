const regModel = require('../Models/regModel');
const mongoose = require('mongoose');

//Register a user
function registerUser(req,res){
    
    if (req.body == null){
        res.send({
            "success" : false,
            "data" : null,
            "error" : "No data Supplied"
        });
    }
    else{
        const newUser = regModel.create(req.body);

        newUser
        .then((user)=>{
            res.send({
                "success" : true,
                "data" : user,
                "error" : null,
                "message" : "User Registeration Successfull"
            });
        })
        .catch(err=>{
            res.send({
                "success" : false,
                "data" : null,
                "error" : err.message,
            });
        });
    }
}

function home(req,res){
    res.render("Register",{title: "Reg", message: ""});
}

 



//end of reg functions

//exporting module

module.exports = {
    registerUser,
    home,

    
}