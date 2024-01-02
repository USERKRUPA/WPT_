const express = require("express")
var router = express.Router();
const connection = require('../db/dbConnect')

router.get("/users",(req,resp)=>{
    connection.query("select * from user",(err, data, fields)=>{
        if(err){
            console.log(err);
            resp.status(500).send("No data found");
        }
        else{
            resp.status(200).send(data);
        }
    })
});

router.post("/users",(req,resp)=>{
    connection.query("insert into user values(?,?,?,?)",[req.body.first_name,req.body.last_name,req.body.address,req.body.pincode],(err, data, fields)=>{
        if(err){
            console.log(err);
            resp.status(500).send("data insertion failed");
        }
        else{
            resp.status(200).send("data inserted");
        }
    })
});

router.put("/users/:fnm",(req,resp)=>{
    //connection.query("update books set title=?, price=?, author=? where id=?",[req.body.title,req.body.price,req.body.author,req.body.id]
    connection.query("update user set last_name=?,address=?, pincode=? where first_name=?",[req.body.last_name,req.body.address,req.body.pincode, req.body.first_name],(err, data, fields)=>{
        if(err){
            console.log(err);
            resp.status(500).send("data update failed");
        }
        else{
            console.log(data);
            resp.status(200).send("data updated");
        }
    })
});

router.delete("/users/:fnm",(req,resp)=>{
    connection.query("delete from user where first_name=?",[req.params.fnm],(err, data, fields)=>{
        if(err){
            console.log(err);
            resp.status(500).send("data deletion failed");
        }
        else{
            resp.status(200).send("data deleted");
        }
    })
});

module.exports = router;