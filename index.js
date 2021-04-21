//calling requirements
const express = require("express");
const app = express();
const register = require('./Routes/regRoute');
const news = require('./Routes/newsRoute');
const database = require('./Routes/databaseRoute');
const login = require('./Routes/loginRoute');
const mongoose = require('mongoose');
const indexRoutes = require('./Routes/indexRoute');
const dashboard = require('./Routes/dashboardRoute');
const regModel = require('./Models/regModel');
const edit = require('./Routes/editRoute');


//connecting to mongoose
mongoose.connect('mongodb://localhost/RegProject',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err)=>{
    if(err){
        console.log('Database could not connect');
        console.log(err.message);
    }
    else{
        console.log('Database Connected');
    }
})


//ejs middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//assets middleware
app.use(express.static("Assets"));
   
//calling external routes
app.use('/',indexRoutes);
app.use('/Register',register);
app.use('/News', news);
app.use('/Database', database);
app.use('/Login',login);
app.use('/dashboard',dashboard);
app.use('/edit',edit);

app.get('/success', (req,res)=>{
    res.render('success',{title : " "})
})


//listening for request 
const PORT = 7000;
app.listen(PORT,()=>{
    console.info(`Database is now running on PORT: ${PORT}`)
})