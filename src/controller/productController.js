import Product from '../model/Product.js';

// ✅ Create Product
export const createProduct = async (req, res) => {
  try {
    if (req.body.images && req.body.images.length > 10) {
      return res.status(400).json({ error: "Maximum 10 images allowed" });
    }

    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Product
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Products by Store + Category
export const getProductsByStoreAndCategory = async (req, res) => {
  try {
    const { storeId, categoryId } = req.params;
    const products = await Product.find({ storeId, categoryId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Top Rated Products
export const getTopRatedProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ rating: -1 }).limit(10);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Best Selling Products
export const getBestSellingProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ soldCount: -1 }).limit(10);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ✅ Get Products by Category ID
export const getProductsByCategory = async (req, res) => {
    try {
      const { catId } = req.params;
      const products = await Product.find({ categoryId: catId });
      res.json(products);
    } catch (error) {
      console.error("getProductsByCategory error:", error);
      res.status(500).json({ error: "Server error" });
    }
  };
  