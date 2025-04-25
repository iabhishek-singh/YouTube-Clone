// backend/models/userModel.js

// Import mongoose to define the schema and model
import mongoose from "mongoose";

// ===================== Define User Schema =====================
const userSchema = new mongoose.Schema({
  // Username must be unique, trimmed, and required
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  // Email must be unique and required
  email: {
    type: String,
    required: true,
    unique: true,
  },

  // Password is required (stored as a hashed string)
  password: {
    type: String,
    required: true,
  },

  // Avatar image URL or file path; required and must be provided on registration
  avatar: {
    type: String,
    required: true, // Now avatar is mandatory
    default: "",
  },

  // List of channel names or IDs the user is subscribed to
  channels: {
    type: [String],
    default: [],
  },
});

// ===================== Export User Model =====================
// Create and export the User model based on the schema
export default mongoose.model("User", userSchema);
