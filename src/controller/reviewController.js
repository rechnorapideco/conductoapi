import Review from '../models/Review.js';
import Product from '../models/Product.js';

export const createReview = async (req, res) => {
  try {
    const { userId, productId, media } = req.body;

    if (media.length > 5) return res.status(400).json({ error: 'Max 5 media files allowed.' });

    const review = await Review.create({ userId, productId, media });

    // Add to product's review list
    const product = await Product.findById(productId);
    product.reviews.push(review._id);
    await product.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).populate('userId');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
