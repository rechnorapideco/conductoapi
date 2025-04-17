import Slider1 from '../models/Slider1.js';


const createGenericSlider = (Model) => async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) return res.status(400).json({ error: "Image URL is required" });

    const image = await Model.create({ imageUrl });
    res.status(201).json({ message: "Image added", image });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGenericSlider = (Model) => async (req, res) => {
  try {
    const images = await Model.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSlider1 = createGenericSlider(Slider1);
export const getSlider1 = getGenericSlider(Slider1);

