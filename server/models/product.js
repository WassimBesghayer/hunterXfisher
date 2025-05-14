// defining 'Mongoose'
const mongoose=require("mongoose");

// calling 'Schema' from Mongoose
const data_model=mongoose.Schema;


// product model description
const product_schema = new data_model({
    designation: String,
    trademark: String,
    product_code: {type: String, unique: true},
    price: Number,
    photo: String,
    category: String,
    description: String,
    warranty: Number,
})

const Product = mongoose.model('Product', product_schema);
module.exports = Product;