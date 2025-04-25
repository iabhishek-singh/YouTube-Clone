// backend/controllers/authController.js

// Import required packages and modules
import User from "../models/userModel.js";        // User model for database interaction
import jwt from "jsonwebtoken";                  // JWT for token generation
import bcrypt from "bcryptjs";                  // Bcrypt for password hashing
import dotenv from "dotenv";                    // Dotenv for environment variable management

// Load environment variables
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;        // Secret key for JWT signing

// ===================== REGISTER USER =====================
export const registerUser = async (req, res) => {
  try {
    // Extract required data from the request body and file (if uploaded)
    const { username, email, password, avatarUrl, channels } = req.body;
    const file = req.file;

    // Validate avatar input (either uploaded file or provided URL must be present)
    if (!file && !avatarUrl) {
      return res.status(400).json({ message: "Avatar image is required" });
    }

    // Determine avatar source (uploaded file or URL)
    const avatar = file ? `/uploads/${file.filename}` : avatarUrl;

    // Generate salt and hash the user's password for secure storage
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance with hashed password and provided details
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar,
      channels,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with success message and newly created user data (excluding sensitive info)
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    // Handle registration errors
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ===================== LOGIN USER =====================
export async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    // Find user by email in the database
    const user = await User.findOne({ email });

    // Validate user existence and password correctness
    const isPasswordValid = user && await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token with user ID payload and 1-day expiration
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    // Respond with user details (excluding password) and JWT token
    res.json({
      user: {
        userId: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        channels: user.channels,
      },
      token,
    });
  } catch (err) {
    // Handle login errors
    console.error("Login Error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
}
