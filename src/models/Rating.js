import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  count: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
}, { timestamps: true });

export default mongoose.model('Rating', ratingSchema);
