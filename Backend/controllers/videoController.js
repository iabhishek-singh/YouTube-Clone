// Import the Video model and mock video data
import Video from "../models/videoModel.js";
import mockData from "../mockData.js";

// ===================== Seed Video Data into Database =====================
export async function seedVideos(req, res) {
  try {
    // Delete all existing video documents to avoid duplication
    await Video.deleteMany();

    // Insert video documents from mockData into the database
    const saved = await Video.insertMany(mockData);

    // Return a success response with the number of videos inserted
    res.status(201).json({ message: "Videos seeded successfully", count: saved.length });
  } catch (err) {
    // Handle errors during the seeding process
    console.error("Seeding Error:", err);
    res.status(500).json({ message: "Seeding failed", error: err.message });
  }
}

// ===================== Get All Videos =====================
// ✅ Add this new function
export async function getAllVideos(req, res) {
  try {
    // Retrieve all videos from the database
    const videos = await Video.find();

    // Return the list of videos with a 200 OK status
    res.status(200).json(videos);
  } catch (error) {
    // Handle errors during video fetching
    console.error("Fetch videos error:", error);
    res.status(500).json({ message: "Server error" });
  }
}
