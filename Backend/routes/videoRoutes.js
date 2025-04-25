// Import necessary modules and functions
import express from "express";  // Express framework for routing
import { seedVideos, getAllVideos } from "../controllers/videoController.js"; // Controller functions for seeding and fetching videos
import { verifyToken } from "../middleware/authMiddleware.js";  // Middleware to verify JWT token for protected routes

// Create a new Express router
const router = express.Router();

// ===================== Define Routes =====================
// Route to seed the database with mock video data (no authentication required)
router.post("/seed", seedVideos);  // Seeding route to populate the database with initial video data

// Route to get all videos, protected by JWT token verification
router.get("/", verifyToken, getAllVideos); // Protected route to fetch all videos, requires valid token

// Export the router to be used in the main app
export default router;
