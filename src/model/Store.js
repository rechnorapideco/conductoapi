import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  status: { type: String, default: "open" },
  categories: [Object], // 💾 Save full category object
  products: [Object]    // 💾 Save full product object
}, { timestamps: true });

const Store = mongoose.model('Store', storeSchema);
export default Store;
