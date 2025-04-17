import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // URL
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
}, { timestamps: true });

export default mongoose.model('SubCategory', subCategorySchema);
