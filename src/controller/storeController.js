import Store from '../model/Store.js';
import Product from '../model/Product.js';
import Category from '../model/Category.js';


export const createStore = async (req, res) => {
    try {
      const { name, phone, location, status } = req.body;
  
      if (!location || typeof location.lat !== 'number' || typeof location.lng !== 'number') {
        return res.status(400).json({ error: "Location (lat/lng) is required" });
      }
  
      const existing = await Store.findOne({ name });
      if (existing) return res.status(400).json({ error: "Store already exists" });
  
      const store = await Store.create({ name, phone, location, status });
      res.status(201).json({ message: "Store created successfully", store });
  
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateStore = async (req, res) => {
    try {
      const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!store) return res.status(404).json({ error: "Store not found" });
  
      res.json({ message: "Store updated", store });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
// ✅ Get All Stores (with categories, types, etc.)
export const getAllStoresWithDetails = async (req, res) => {
  try {
    const stores = await Store.find().lean();
    
    const result = stores.map(store => ({
      _id: store._id,
      name: store.name,
      phone: store.phone,
      status: store.status,
      location: store.location,
      categories: store.categories || [],
      products: store.products || [],
      types: store.types || [],
      companies: store.companies || [],
      colors: store.colors || [],
      sizes: store.sizes || []
    }));
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
