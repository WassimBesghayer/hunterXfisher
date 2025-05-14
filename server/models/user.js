// defining 'mongoose'
const mongoose=require("mongoose");
// calling 'Schema' from Mongoose (it is a function)
const data_model=mongoose.Schema;

// Describing what a user should contain as a schema
const user_schema = new data_model({
    name: String,
    surname: String,
    birthday: Number,
    phone: {type: Number, unique: true},
    email: {type: String, unique: true},
    bank_card: {type: String, unique: true},
    isAdmin: {type: Boolean, default: false}
})

// model creation
const User=mongoose.model('User', user_schema)
module.exports=User
