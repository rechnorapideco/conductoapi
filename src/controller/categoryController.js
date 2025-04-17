import Category from '../model/Category.js';
import Store from '../model/Store.js';


export const createCategory = async (req, res) => {
  try {
    const { storeId, ...categoryData } = req.body;
    
    if (!storeId) {
      return res.status(400).json({ error: "storeId is required" });
    }

    const category = await Category.create({ ...categoryData, storeId });
    
    // Update the store with this new category (as embedded document)
    await Store.findByIdAndUpdate(
      storeId,
      { 
        $push: { 
          categories: {
            _id: category._id,
            name: category.name,
            // include other category fields you want to store
            description: category.description || null,
            image: category.image || null
          } 
        } 
      },
      { new: true }
    );
    
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


// ✅ Get Category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
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
