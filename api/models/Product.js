const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title is required"],
        unique: true
    },
    desc: {
        type: String,
        required: [true, "Product Description is required"]
    },
    img: {
        type: String,
        required: [true, "Product Image is required"]
    },
    categories: {
        type: Array
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required: [true, "Product Price is required"]
    }
}, {timestamps: true})


module.exports = mongoose.model("Product", ProductSchema)