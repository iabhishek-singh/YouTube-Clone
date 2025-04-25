//Backend/middleware/models/videoModel.js 
// Import required modules
import jwt from "jsonwebtoken"; // JWT package to verify tokens
import dotenv from "dotenv";    // Load environment variables

// Load environment variables
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET; // Secret key used for verifying JWTs

// ===================== Verify JWT Token Middleware =====================
// This middleware function checks for a valid JWT token in the Authorization header
export function verifyToken(req, res, next) {
  // Extract the Authorization header from the request
  const authHeader = req.headers.authorization;

  // Check if the header exists and starts with 'Bearer '
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key and attach the decoded user info to the request object
    req.user = jwt.verify(token, JWT_SECRET);

    // Proceed to the next middleware or route handler
    next();
  } catch {
    // If token verification fails, respond with an unauthorized error
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
