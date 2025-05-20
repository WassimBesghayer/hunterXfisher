// setting up routing to 'products'
const express=require("express");
const Product = require("../models/product");   // Import Product data-model
const productRouter=express.Router();   // Create Express router instance (then, exporting 'productRouter')

// add product
productRouter.post("/add", async (req, res) => {
    try {
        // Create new item instance from request body
        let newProduct = new Product(req.body);

        // Save the item to database
        let result = await newProduct.save();

        // Send success response
        res.send({product: result, msg: "the product is added successfully"})
    } catch (error) {
        console.log(error)
    }
})

// get a product by ID.
productRouter.get("/:id", async (req, res) => {
  try {
    // Find item by ID from URL parameter
    let result = await Product.findById(req.params.id);
    
    // Send found item in response
    res.send({ item: result, msg: " item" });
  } catch (error) {
    console.log(error);
  }
});

// get all products
productRouter.get("/", async (req, res) => {
    try {
        let result = await Product.find();
        res.send({products: result, msg: "These are all products :"})
    } catch (error) {
        console.log(error)
    }
})

// update a product
productRouter.put("/:id", async (req, res) => {
  try {
    // Find item by ID and update with request body
    let result = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    
    // Send success message
    res.send({ item: "result", msg: "item is updated" });
  } catch (error) {
    console.log(error);
  }
});

// delete a product
productRouter.delete("/:id", async (req, res) => {
  try {
    // Find and delete item by ID
    let result = await Product.findByIdAndDelete(req.params.id);
    
    // Send success message
    res.send({ msg: "product is deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports=productRouter;