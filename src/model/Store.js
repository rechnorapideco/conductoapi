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
  products: [{
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    images: [String],
    type: String,
    company: String
    // other product fields you want to store
  }],
  // Distinct values arrays
  types: [String],
  companies: [String],
  colors: [String],
  sizes: [String]
});