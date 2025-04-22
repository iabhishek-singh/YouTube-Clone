// backend/models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:   { type: String, required: true, unique: true, trim: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true },
  avatar: {
    type: String,
    required: true, // Now avatar is mandatory
    default: "",
  },
  
  channels:   { type: [String], default: [] },
});

export default mongoose.model("User", userSchema);
