// backend/routes/authRoutes.js
import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();


router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);

export default router;
