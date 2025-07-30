// defining 'mongoose'
const mongoose = require("mongoose");

// importing 'mongoose' to create a schema for the user model
// 'mongoose' is a library that provides a straightforward way to model data in MongoDB
// calling 'Schema' from Mongoose (it is a function)
const schema = mongoose.Schema;

// Describing what a user should contain as a schema
const UserSchema = new schema({
  picture: { type: String, default: "https://www.w3schools.com/howto/img_avatar.png" },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: {type: String, required: true},
  bank_card: {type: String, required: true},
  birthday: {type: String, required: true},
  address: {type: String},
  category: { type: String, default: "user" },
});


// 'mongoose.models.user' is used to avoid overwriting the model if it already exists
// This is useful in development environments where the model might be redefined multiple times
// model creation
module.exports = mongoose.models.user || mongoose.model("user", UserSchema);