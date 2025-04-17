import SubCategory from '../models/SubCategory.js';
import Category from '../models/Category.js';

export const createSubCategory = async (req, res) => {
  const { name, image, products, category } = req.body;

  if (!category) return res.status(400).json({ error: 'Category ID is required' });

  try {
    const existingCategory = await Category.findById(category);
    if (!existingCategory) return res.status(404).json({ error: 'Category not found' });

    const subCategory = await SubCategory.create({ name, image, products, category });

    // Optional: Push subcategory ID into category.subcategories array
    existingCategory.subcategories.push(subCategory._id);
    await existingCategory.save();

    res.status(201).json(subCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('products');
    res.json(subCategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id).populate('products');
    if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
    res.json(subCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
    res.json(subCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
