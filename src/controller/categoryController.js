import Category from '../models/Category.js';
import Store from '../models/Store.js';

export const createCategory = async (req, res) => {
  const { name, image, subcategories, store } = req.body;

  if (!store) return res.status(400).json({ error: 'Store ID is required' });

  try {
    const existingStore = await Store.findById(store);
    if (!existingStore) return res.status(404).json({ error: 'Store not found' });

    const category = await Category.create({ name, image, subcategories, store });

    // Optional: Push category ID into store.categories
    existingStore.categories.push(category._id);
    await existingStore.save();

    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('subcategories');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('subcategories');
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
