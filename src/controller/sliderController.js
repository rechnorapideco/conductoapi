import Slider1 from '../model/Slider1.js';
import Slider2 from '../model/Slider2.js';
import Slider3 from '../model/Slider3.js';
import Slider4 from '../model/Slider4.js';

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

export const createSlider2 = createGenericSlider(Slider2);
export const getSlider2 = getGenericSlider(Slider2);

export const createSlider3 = createGenericSlider(Slider3);
export const getSlider3 = getGenericSlider(Slider3);

export const createSlider4 = createGenericSlider(Slider4);
export const getSlider4 = getGenericSlider(Slider4);
