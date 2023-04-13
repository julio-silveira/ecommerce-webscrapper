import mongoose, { Schema } from 'mongoose';
import { ProductList } from '../types/ProductList';

const ProductSchema = new Schema({
  image: String,
  title: String,
  category: String,
  url: String,
  price: Number,
  originWebsite: String
}, {versionKey: false})


const ProductListSchema = new Schema({
  category: String,
  query: String,
  products: [ProductSchema]
}, {versionKey: false})

const ProductsListModel = mongoose.model<ProductList>('ProductList', ProductListSchema);

export default ProductsListModel