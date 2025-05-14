// defining 'mongoose'
const mongoose=require("mongoose");
// calling 'Schema' from Mongoose (it is a function)
const data_model=mongoose.Schema;

// Describing what a user should contain as a schema
const user_schema = new data_model({
    name: String,
    surname: String,
    birthday: Number,
    phone: Number,
    email: String,
    bank_card: String
})

// model creation
const User=mongoose.model('User', user_schema)
module.exports=User
