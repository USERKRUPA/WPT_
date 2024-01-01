const mysql = require('mysql');
var myConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql',
    port: 3306,
    database: 'wpt',
   // multipleStatements : true
})

myConnection.connect((err)=>{
    if(err){
        console.log("sql connection not established", err);
    }
    else{
        console.log("connection established");
    }
});
module.exports = myConnection;