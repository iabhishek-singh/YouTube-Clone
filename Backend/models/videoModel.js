// Import mongoose to define the schema and model
import mongoose from "mongoose";

// ===================== Define Video Schema =====================
const videoSchema = new mongoose.Schema({
  // Unique video ID, required to identify each video
  videoId: {
    type: String,
    required: true,
    unique: true,  // Ensures no duplicate video IDs in the database
  },

  // Title of the video, required field
  title: {
    type: String,
    required: true,
  },

  // Channel name where the video was uploaded, required field
  chanleName: {
    type: String,
    required: true,
  },

  // URL link to the video itself, required field
  videoUrl: {
    type: String,
    required: true,
  },

  // Optional description of the video
  description: {
    type: String,
  },

  // Optional channel ID associated with the video
  channelId: {
    type: String,
  },

  // Name of the uploader (user who uploaded the video)
  uploader: {
    type: String,
  },

  // Number of views the video has received
  views: {
    type: String,
  },

  // Number of likes on the video
  likes: {
    type: String,
  },

  // Number of dislikes on the video
  dislikes: {
    type: String,
  },

  // Date the video was uploaded, stored as a string
  uploadDate: {
    type: String,
  },

  // Category the video belongs to (e.g., Education, Entertainment)
  category: {
    type: String,
  },
});

// ===================== Export Video Model =====================
// Create and export the Video model based on the schema
export default mongoose.model("Video", videoSchema);
