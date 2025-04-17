import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  city: { type: String, required: true },
  pinCode: { type: String, required: true },
  landmark: String,
  apartment: String,
  nearby: String
}, { timestamps: true });

export default mongoose.model('Address', addressSchema);
