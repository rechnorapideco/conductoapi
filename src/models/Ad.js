import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true }
}, { timestamps: true });

const Ad = mongoose.model('Ad', adSchema);
export default Ad;
