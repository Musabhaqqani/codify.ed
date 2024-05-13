const mongoose = require("mongoose");
const express = require('express');
const mainRouter = require("./routes/mainRoute")
const cors = require("cors");
const bodyParser = require("body-parser")
const app=express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use("/api/v1",mainRouter)
//port number
app.listen(5000,()=>{
    console.log('listening on port number 5000');
});