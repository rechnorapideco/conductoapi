import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, { timestamps: true });

const Brand = mongoose.model('Brand', brandSchema);
export default Brand;
