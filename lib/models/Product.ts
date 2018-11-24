import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    discount: Number, // porcentagem
    images: [String],
    category: [String],
    keywords: [String]
});

export const Product = mongoose.model("Product", productSchema); 
