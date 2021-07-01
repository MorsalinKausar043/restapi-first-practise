const express = require('express') ;
require("./mongoose/mongoose");
const StudentList = require("./data/data");
const app = express() ;
const port = process.env.PORT || 8000 ;

app.use(express.json());

app.post("/students" , async(req,res) =>{
    const user = new StudentList(req.body) ;
    const result = await user.save();
    res.status(201).send(result);
})

app.post("/" , (req,res) =>{
    res.send("hello world")
})

app.listen(port , () =>{
    console.log(`this port is ${port}`);
})