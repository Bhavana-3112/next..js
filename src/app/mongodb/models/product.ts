// models/Product.ts
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
