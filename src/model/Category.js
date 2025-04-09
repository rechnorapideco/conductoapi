import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  types: [String],
  size: [String],
  color: [String],
  rating: { type: Number, default: 0 },
  review: [String],
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }  // To link category to a store
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);
export default Category;
