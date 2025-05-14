// defining 'mongoose'
const mongoose=require("mongoose");

// setting up connection to DB
const DB_connecting=async()=>{
    try {
        let result=await mongoose.connect(process.env.db_uri);
        console.log("DataBase is connected successfully")
    } catch (error) {
        console.log(error);
    }
}

module.exports=DB_connecting