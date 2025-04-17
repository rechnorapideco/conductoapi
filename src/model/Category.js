import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  catId: { type: String, unique: true },
  name: { type: String, required: true },
  company: { type: String },
  types: [String],
  size: [String],
  color: [String],
  rating: { type: Number, default: 0 },
  review: [String],
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }
}, { timestamps: true });

categorySchema.pre('save', async function (next) {
  if (!this.catId) {
    const count = await mongoose.model('Category').countDocuments();
    this.catId = `CAT${(count + 1).toString().padStart(3, '0')}`;
  }
  next();
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
