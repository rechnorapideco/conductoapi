import Brand from '../model/Brand.js';

// ✅ Create a new Brand
export const createBrand = async (req, res) => {
  try {
    const { name, logo, categoryId } = req.body;

    if (!name || !logo || !categoryId) {
      return res.status(400).json({ error: "Name, logo, and categoryId are required" });
    }

    const brand = await Brand.create({ name, logo, categoryId });
    res.status(201).json({ message: "Brand created", brand });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all Brands
export const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find().populate("categoryId", "name");
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
