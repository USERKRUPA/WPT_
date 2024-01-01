const express = require("express");
var router = express.Router();
var connection = require('../db/dbConnect');

//use router ref to serve get, post, put, delete ... requests

//url: /books, method: get 
router.get("/books",function(req, resp){
    connection.query("select * from books", function(err,data, fields){
        if(err){
            resp.status(500).send("No data found");
        }
        else{
            console.log(data);
            resp.send(data);
        }
    });
})

//url: /books, method: post => add data to table
router.post("/books", (req, resp)=>{
    connection.query("insert into books values(?,?,?,?)",[req.body.id,req.body.title,req.body.price,req.body.author],(err,result)=>{
        if(err){
            console.log(err);
            resp.status(500).send("Data not added");
        }
        else{
            resp.send("data inserted");
        }
    })
})

//url: /books/:bid,  method: get 
router.get("/books/:bid",(req,resp)=>{
    connection.query("select * from books where id=?",[req.params.bid],(err,result,fields)=>{
        if(err){
            resp.status(500).send("Data Not Found");
        }
        else{
            console.log(result);
            resp.send(result);
        }
    })
})

//url: /books/:bid,  method: put 
router.put("/books/:bid", (req,resp)=>{
    connection.query("update books set title=?, price=?, author=? where id=?",[req.body.title,req.body.price,req.body.author,req.body.id], (err, result, fields)=>{
        if(err){
            resp.status(500).send("Data can not be updated");
        }
        else{
            console.log(result);
            resp.send("Data updated");
        }
    });
})

//url: /delete/:bid, method: delete
router.delete("/books/:bid", (req, resp) => {
    connection.query("delete from books where id = ?"
    ,[req.params.bid],(err, result, fields)=>{
        if(err){
            console.log(err);
            resp.status(500).send("Data Deletion Unsuccessful");
        }
        else{
            resp.status(200).send("Book deleted");
        }
    })
})

module.exports = router;