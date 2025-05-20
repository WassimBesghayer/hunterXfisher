// defining 'express'
const express=require("express");

// defining 'app'
const app=express();

// calling 'dotenv' library
require("dotenv").config();

// calling DB connection method()
const DB_connecting=require("./config/connect_DB");
DB_connecting();

// enabling express to read .json files
app.use(express.json());

// activating CORS
app.use(cors());

// routing
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/order", require("./routes/order"));

// routing: assigning port + catching errors
app.listen(process.env.port, (err)=>err?console.log(err):console.log("server is running well !"))