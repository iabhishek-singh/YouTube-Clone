// app.js

// Import necessary modules
import express from "express";  // Express framework for creating the server
import dotenv from "dotenv";    // To load environment variables from the .env file
import authRoutes from "./routes/authRoutes.js";  // Import authentication-related routes
import { connectDB } from "./config/db.js";  // MongoDB connection function
import videoRoutes from "./routes/videoRoutes.js";  // Import video-related routes
import cors from "cors";  // CORS middleware to allow cross-origin requests

// Load environment variables from the .env file
dotenv.config();

// Create an instance of Express app
const app = express();

// Set up CORS (Cross-Origin Resource Sharing) to allow requests from the frontend
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL to allow access (update as necessary)
    credentials: true  // Allow cookies to be sent with requests
}));

// Use middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Set up routes for authentication (registration and login)
app.use("/api/auth", authRoutes);

// Serve static files (e.g., uploaded images) from the "uploads" directory
app.use("/uploads", express.static("uploads"));

// Set up routes for video-related functionality (seeding, fetching videos)
app.use("/api/videos", videoRoutes);

// Connect to MongoDB database
connectDB();

// Export the app instance for use in other parts of the application (e.g., server start)
export default app;
