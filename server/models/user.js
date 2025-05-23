
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("user", UserSchema);


// // defining 'mongoose'
// const mongoose=require("mongoose");
// // calling 'Schema' from Mongoose (it is a function)
// const data_model=mongoose.Schema;

// // Describing what a user should contain as a schema
// const user_schema = new data_model({
//     name: {type: String, required: true},
//     surname: {type: String, required: true},
//     // birthday: {type: Date, required: true, trim: true},
//     birthday: {type: String, required: true},
//     phone: {type: Number, unique: true},
//     email: {type: String, unique: true, required: true},
//     bank_card: {type: String, unique: true},
//     isAdmin: {type: Boolean, default: false}
// })

// // model creation
// const User=mongoose.model('User', user_schema)
// module.exports=User
