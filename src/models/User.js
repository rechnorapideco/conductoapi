import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  profilePic: String,
  city: String,
  location: {
    lat: Number,
    lng: Number
  },
  password: String,
  ratings: [Number],
  reviews: [String],
  otp: String,
  otpExpires: Date
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
