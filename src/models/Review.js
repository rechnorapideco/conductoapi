import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  media: {
    type: [String], // URLs to files
    validate: [arrLimit, '{PATH} exceeds 5 files max']
  }
}, { timestamps: true });

function arrLimit(val) {
  return val.length <= 5;
}

export default mongoose.model('Review', reviewSchema);
