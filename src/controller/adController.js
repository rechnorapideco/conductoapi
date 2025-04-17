import Ad from '../models/Ad.js';

// ✅ Create Ad (image URL only)
export const createAd = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image URL is required" });
    }

    const ad = await Ad.create({ imageUrl });
    res.status(201).json({ message: "Ad created", ad });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Ads
export const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().sort({ createdAt: -1 });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
