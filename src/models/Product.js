import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: {
    type: [String], // URLs
    validate: [arrayLimit, '{PATH} exceeds the limit of 10']
  },
  stock: { type: Number, required: true },
  sold: { type: Number, default: 0 },
  price: { type: Number, required: true },

  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: true },

  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
  
  averageRating: { type: Number, default: 0 }
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 10;
}

export default mongoose.model('Product', productSchema);
