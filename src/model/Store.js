import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: {
    lat: Number,
    lng: Number
  },
  status: String,
  // Embedded categories array
  categories: [{
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    image: String
    // other category fields you want to store
  }],
  // Embedded products array
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  ,
  // Distinct values arrays
  types: [String],
  companies: [String],
  colors: [String],
  sizes: [String]
});

const Store = mongoose.model('Store', storeSchema);
export default Store;
