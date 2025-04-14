import Product from '../model/Product.js';
import Store from '../model/Store.js';

export const createProduct = async (req, res) => {
  try {
    if (req.body.images && req.body.images.length > 10) {
      return res.status(400).json({ error: "Maximum 10 images allowed" });
    }

    const { storeId, ...productData } = req.body;
    
    if (!storeId) {
      return res.status(400).json({ error: "storeId is required" });
    }

    const product = await Product.create({ ...productData, storeId });
    
    // Update the store with this new product (as embedded document)
    await Store.findByIdAndUpdate(
      storeId,
      { 
        $push: { 
          products: {
            _id: product._id,
            name: product.name,
            price: product.price,
            // include other product fields you want to store
            images: product.images || [],
            type: product.type || null,
            company: product.company || null
          } 
        },
        $addToSet: {
          types: product.type,
          companies: product.company,
          colors: product.color,
          sizes: product.size
        }
      },
      { new: true }
    );
    
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
  