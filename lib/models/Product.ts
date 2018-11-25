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

productSchema.index({name: 'text', keywords: 'text'});

export const Product = mongoose.model("Product", productSchema); 
