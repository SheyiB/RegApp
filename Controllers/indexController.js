const mongoose = require('mongoose');
const regModel = require('../Models/regModel');
const express = require('express');




function index(req,res){
    res.render("index",{title: "Home"}); 
};


function submit(req,res){
    console.log(req.body);

    const newUser = regModel.create(req.body);
    newUser
    .then((user)=>{
       res.status(201).render('success',{title : " ",message : 'User Registeration Successfull'});    
    })
    .catch((err)=>{
        res.status(501).json({
            status: "Failed",
            data: {
                message: err
            },
        });
    });
   };

function signin(req,res){
    console.log(req.body);
    
    const user = regModel.findOne({
       username: req.body.username,
       password: req.body.password,
   });
   user
    .then((newuser) => {
       if (user) res.status(200).render('dashboard', 
       {status: req.body.username, 
        phonenumber : newuser.phone, 
        firstname : newuser.firstname,
        lastname : newuser.lastname,
        middlename : newuser.middlename,
        dob : newuser.dob,
        mail : newuser.mail,
        nationality : newuser.nationality,
        
        
    });
       //.render("login", {status: user});//.send({status: 'Login Successful'});
       else res.status(501).send({ status: newuser});
   })
   .catch((err)=>{
       res.status(503).send(err.message);
   });

};

function update(req,res){
    console.log(req.body);
    res.send(req.body)

   // const updateUser = regModel.findOneAndUpdate({ })
}

// function update
module.exports = {
    submit,
    index,
    signin,
    update
}