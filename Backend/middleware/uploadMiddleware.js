// backend/middleware/uploadMiddleware.js
import multer from "multer";

// Setup multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// ✅ Export the multer instance
const upload = multer({ storage });
export default upload;
