import mongoose from 'mongoose';

const sliderSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true }
}, { timestamps: true });

const Slider1 = mongoose.model('Slider1', sliderSchema);
export default Slider1;
