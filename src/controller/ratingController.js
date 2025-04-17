import Rating from '../models/Rating.js';
import Product from '../models/Product.js';

export const giveRating = async (req, res) => {
  try {
    const { userId, productId, count } = req.body;

    // Check if user already rated the product
    const existing = await Rating.findOne({ userId, productId });

    let rating;
    if (existing) {
      existing.count = count;
      rating = await existing.save();
    } else {
      rating = await Rating.create({ userId, productId, count });
    }

    // Update product's ratings list & avg
    const ratings = await Rating.find({ productId });
    const avg = ratings.reduce((sum, r) => sum + r.count, 0) / ratings.length;

    await Product.findByIdAndUpdate(productId, {
      ratings: ratings.map(r => r._id),
      averageRating: avg.toFixed(1)
    });

    res.status(201).json(rating);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProductRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({ productId: req.params.productId }).populate('userId');
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
