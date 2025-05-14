// defining 'express'
const express=require("express");

// defining 'app'
const app=express();

// calling 'dotenv' library
require("dotenv").config();

// calling DB connection method()
const DB_connecting=require("./config/connect_DB");
DB_connecting();

// routing: assigning port + catching errors
app.listen(process.env.port, (err)=>err?console.log(err):console.log("server is running well !"))