import Category from '../model/Category.js';

// ✅ Create Category
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Category
export const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Categories Under a Store
export const getCategoriesByStore = async (req, res) => {
  try {
    const categories = await Category.find({ storeId: req.params.storeId });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
