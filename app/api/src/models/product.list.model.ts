import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  image: String,
  title: String,
  category: String,
  url: String,
  price: Number,
  originWebsite: String
})


const ProductListSchema = new Schema({
  category: String,
  query: String,
  products: [ProductSchema]
})

const ProductsListModel = mongoose.model('ProductList', ProductListSchema);

export default ProductsListModel