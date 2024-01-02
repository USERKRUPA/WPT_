const mysql = require("mysql");
var conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "wpt",
    port: 3306,
    multipleStatements: true
})
conn.connect((err)=>{
    if(err){
        console.log("Error occured", err);
    }
    else{
        console.log("Connection established");
    }
})
module.exports = conn;