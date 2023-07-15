import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    { // all of these shld have extra params such as required but for simplicity here not done
        name: String,
        price: Number,
        description: String,
        category: String,
        rating : Number,
        supply : Number,
    },
    {timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema);
export default Product;