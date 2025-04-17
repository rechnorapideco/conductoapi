import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import otpGenerator from 'otp-generator';
import sendEmail from '../utils/sendEmail.js';

export const registerUser = async (req, res) => {
  const { name, email, phone, profilePic, city, location, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ error: 'Passwords do not match' });

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, email, phone, profilePic, city, location, password: hashed
    });

    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Incorrect password' });

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getResetOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    const html = `
      <div style="font-family: Arial;">
        <h3>Your OTP is: <strong>${otp}</strong></h3>
        <p>Valid for 10 minutes.</p>
      </div>
    `;

    await sendEmail({ to: email, subject: "Reset Password OTP", html });
    res.status(200).json({ message: "OTP sent to your email" });

  } catch (error) {
    console.error("OTP error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, otp, password, confirmPassword } = req.body;

    if (!email || !otp || !password || !confirmPassword)
      return res.status(400).json({ error: "All fields are required" });

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords do not match" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.otp !== otp || user.otpExpires < Date.now())
      return res.status(400).json({ error: "Invalid or expired OTP" });

    const hashed = await bcrypt.hash(password, 10);
    user.password = hashed;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
