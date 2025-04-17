import Product from '../models/Product.js';
import Rating from '../models/Rating.js   ';
import SubCategory from '../models/SubCategory.js';

export const createProduct = async (req, res) => {
  const { name, images, stock, price, subCategory } = req.body;

  if (!subCategory) return res.status(400).json({ error: 'SubCategory ID is required' });

  try {
    const existingSub = await SubCategory.findById(subCategory);
    if (!existingSub) return res.status(404).json({ error: 'SubCategory not found' });

    const product = await Product.create({ name, images, stock, price, subCategory });

    // Link product back to subcategory
    existingSub.products.push(product._id);
    await existingSub.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('reviews ratings');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews ratings');
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Auto-calculate average rating (optional)
    const ratings = await Rating.find({ _id: { $in: product.ratings } });
    const average = ratings.reduce((sum, r) => sum + r.count, 0) / (ratings.length || 1);
    product.averageRating = average.toFixed(1);
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
