const express = require('express')

//const path = require('path')
const bodyParser = require('body-parser')
const app = express();
var routes = require("./routes/router");

//configure application 
//cross origin resource sharing
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//define middlewares : 
//middleware is a fun which will be executed for every request 
//middleware contains all common functionalities
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//define route handlers
app.use("/", routes);

app.listen(9090,function(){
    console.log("Server is up and running");
})

module.exports = app;
