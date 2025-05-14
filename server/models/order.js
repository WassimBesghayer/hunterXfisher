// defining 'Mongoose'
const mongoose = require("mongoose");
// calling 'Schema' from Mongoose
const data_model = mongoose.Schema;

// describing the order Schema
const order_schema = new data_model({
    orderNumber: {type: String, unique: true},
    amount: Number,
    items: String,
    qty: Number
})

const Order = mongoose.model('Order', order_schema);
module.exports = Order;


