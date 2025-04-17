import Offer from '../models/Offer.js';

// ✅ Create Offer Image
export const createOffer = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) return res.status(400).json({ error: "Image URL is required" });

    const offer = await Offer.create({ imageUrl });
    res.status(201).json({ message: "Offer image added", offer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Offer Images
export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
