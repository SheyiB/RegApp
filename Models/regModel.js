const mongoose = require("mongoose");

const regSchemas = mongoose.Schema({
    firstname : {
        type : String,
        required : [true, 'Please enter First name'],
    },

    lastname : {
        type : String,
        required : [true, 'Please enter Last name'],
    },

    middlename : {
        type : String,
        required : [true, 'Please enter Middle name'],
    },

    dob : {
        type : String,
        required : [true, 'Please enter Date of Birth'],
    },
    
    phone : {
        type : Number,
       // required : [true, 'Enter your phone number'],
    },

    mail : {
        type : String,
       // required : [true, 'Enter your email'],
    },

    continent : {
        type : String,
        
    },

    nationality : {
        type : String,
       // required : [true, 'Enter your nationality'],
    },

    state : {
        type : String,      
    },
    
    username: {
        type: String,
        required : [true, 'Username is required'],
        unique: [true, 'Username is taken']
    },

    password: {
        type : String,
        required : [true, 'Please enter a password']
    }

});

module.exports = mongoose.model('register', regSchemas );