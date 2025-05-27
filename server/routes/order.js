const express=require("express");
const Order = require("../models/order");
const orderRouter=express.Router();

// add order
orderRouter.post("/add", async (req, res) => {
    try {
    // Create new Order instance from request body
    let newOrder = new Order(req.body);
    
    // Save the order to database
    let result = await newOrder.save();
    
    // Send success response
    res.send({ order: result, msg: "order is placed" });
    } catch (error) {
        console.log(error);
    }
});

// get a specific order
orderRouter.get("/:id", async (req, res) => {
    try {
    // Find order by ID from URL parameter
    let result = await Order.findById(req.params.id);
    
    // Send found order in response
    res.send({ order: result, msg: " order found" });
    } catch (error) {
        console.log(error);
    }
});

// get all orders
orderRouter.get("/", async (req, res) => {
    try {
    // Find all orders in database
    let result = await Order.find();
    
    // Send all orders in response
    res.send({ orders: result, msg: "all orders" });
    } catch (error) {
        console.log(error);
    }
});

//edit an order
orderRouter.put("/:id", async (req, res) => {
    try {
    // Find order by ID and update with request body
    let result = await Order.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
    );
    
    // Send success message
    res.send({ order: "result", msg: "order is updated" });
    } catch (error) {
        console.log(error);
    }
});

// delete an order
orderRouter.delete("/:id", async (req, res) => {
    try {
    // Find and delete order by ID
    let result = await Order.findByIdAndDelete(req.params.id);
    
    // Send success message
    res.send({ msg: "order is deleted" });
    } catch (error) {
        console.log(error);
    }
});



module.exports=orderRouter