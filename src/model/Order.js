import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }
  ],
  status: { type: String, default: 'pending' }, // pending, confirmed, cancelled
  deliveryStatus: { type: String, default: 'processing' }, // processing, shipped, delivered
  isCancelled: { type: Boolean, default: false },
  cancelReason: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
