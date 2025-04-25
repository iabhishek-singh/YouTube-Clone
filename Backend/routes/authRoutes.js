// backend/routes/authRoutes.js

// Import necessary modules and controllers
import express from "express";  // Express framework for routing
import { registerUser, loginUser } from "../controllers/authController.js"; // Controller functions for register and login
import upload from "../middleware/uploadMiddleware.js";  // Multer middleware to handle file uploads

// Create a new Express router
const router = express.Router();

// ===================== Define Routes =====================
// Route to register a new user with avatar image (handled by 'upload.single')
router.post("/register", upload.single("avatar"), registerUser); // Handles user registration and avatar upload

// Route to log in a user
router.post("/login", loginUser); // Handles user login

// Export the router so it can be used in the main app
export default router;
