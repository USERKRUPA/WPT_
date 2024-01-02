const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/router")

//create app object of express
var app = express();
//cross origin resource sharing
var cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//configure application
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(9000, ()=>{
    console.log("server started at port 9000");
})

module.exports = app;