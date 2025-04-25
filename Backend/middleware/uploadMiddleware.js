// backend/middleware/uploadMiddleware.js

// Import multer, a middleware for handling multipart/form-data (used for file uploads)
import multer from "multer";

// ===================== Configure Storage Settings for Multer =====================
// Setup custom storage logic to define destination and filename for uploaded files
const storage = multer.diskStorage({
  // Define the folder where uploaded files will be saved
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save all files in the 'uploads' directory
  },
  // Define how filenames should be formatted when stored
  filename: function (req, file, cb) {
    // Create a unique filename using the current timestamp and original name
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// ===================== Export Multer Upload Instance =====================
// Create and export a multer instance using the configured storage settings
const upload = multer({ storage });
export default upload;
