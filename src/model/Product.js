import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: String,
  images: [String], // Cloudinary or direct URLs, max 10
  size: String,
  stockCount: Number,
  company: String,
  type: String,
  color: String,
  price: Number,
  rating: { type: Number, default: 0 },
  reviews: [String],
  soldCount: { type: Number, default: 0 },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
