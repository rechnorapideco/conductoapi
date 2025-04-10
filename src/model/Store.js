import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  location: String,
  status: { type: String, default: "open" } // open or closed
}, { timestamps: true });

const Store = mongoose.model('Store', storeSchema);
export default Store;
