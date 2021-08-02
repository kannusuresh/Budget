const dotenv=require("dotenv");

const express = require("express");

const mongoose=require('mongoose');
const app= express();
dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;

require('./db/conn')
// const User=require('./model/userSchema');

app.use(express.json());
//we link the roter file
app.use(require('./router/auth'));



// app.get("/",(req,res)=>{
//     res.send("hi kannu")
    
// })
// app.get("/about",(req,res)=>{
//     console.log(`another middleware`)
//     res.send("about")

// })
// app.get("/conduct",(req,res)=>{
//     // res.cookie("Test",'kannu')
//     res.send("conduct")

// })
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})