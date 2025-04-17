import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

export default mongoose.model('Store', storeSchema);
