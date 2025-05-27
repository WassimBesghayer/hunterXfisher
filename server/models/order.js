// defining 'Mongoose'
const mongoose = require("mongoose");
// calling 'Schema' from Mongoose
const data_model = mongoose.Schema;

// describing the order Schema
const order_schema = new data_model({
    order_number: {type: String, unique: true},
    buyer:String,
    productname:String,
    productimage:String,
    amount: Number,
    qty: Number,
    purchase_date: {type: Date, default: Date.now}
})

const Order = mongoose.model('Order', order_schema);
module.exports = Order;


