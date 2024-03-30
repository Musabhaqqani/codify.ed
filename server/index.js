const mongoose = require("mongoose");
const express = require('express');
const cors = require("cors");
const app=express();
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

const url = 'mongodb+srv://musabhaqqani:iUwJGslvNFSNjBOm@cluster0.onkpicf.mongodb.net/'

mongoose.connect(url).then(()=> console.log("Mongoose Connected."))

//port number
app.listen(5000,()=>{
    console.log('listening on port number 5000');
});