import Order from '../model/Order.js';

// 🔹 Create Order
export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get Orders by User
export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get Active Orders (not cancelled/delivered)
export const getActiveOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId,
      isCancelled: false,
      deliveryStatus: { $ne: 'delivered' }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Cancel Order by User
export const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { reason } = req.body;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = 'cancelled';
    order.isCancelled = true;
    order.cancelReason = reason || 'No reason provided';

    await order.save();

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Track Order Status
export const getOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.json({
      orderId: order._id,
      status: order.status,
      deliveryStatus: order.deliveryStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
