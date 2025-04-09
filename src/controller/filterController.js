import Product from '../model/Product.js';

// 🔹 Get all companies under a store
export const getCompaniesByStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const companies = await Product.distinct('company', { storeId });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get all companies under a category
export const getCompaniesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const companies = await Product.distinct('company', { categoryId });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get all companies under store + category
export const getCompaniesByStoreAndCategory = async (req, res) => {
  try {
    const { storeId, categoryId } = req.params;
    const companies = await Product.distinct('company', { storeId, categoryId });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get all types under a store
export const getTypesByStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const types = await Product.distinct('type', { storeId });
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get all types under a category
export const getTypesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const types = await Product.distinct('type', { categoryId });
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get all colors under a store
export const getColorsByStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const colors = await Product.distinct('color', { storeId });
    res.json(colors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get all sizes under a store
export const getSizesByStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const sizes = await Product.distinct('size', { storeId });
    res.json(sizes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
