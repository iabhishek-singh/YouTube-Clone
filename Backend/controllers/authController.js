// backend/controllers/authController.js
import User from "../models/userModel.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// export const registerUser = async (req, res) => {
//   try {
//     const { username, email, password, avatarUrl,channels } = req.body;
//     const file = req.file;

//     // ✅ This is the important check:
//     if (!file && !avatarUrl) {
//       return res.status(400).json({ message: "Avatar image is required" });
//     }

//     const avatar = file ? `/uploads/${file.filename}` : avatarUrl;

//     const newUser = new User({
//       username,
//       email,
//       password,
//       avatar,
//       channels,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     console.error("Register Error:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, avatarUrl, channels } = req.body;
    const file = req.file;

    if (!file && !avatarUrl) {
      return res.status(400).json({ message: "Avatar image is required" });
    }

    const avatar = file ? `/uploads/${file.filename}` : avatarUrl;

    // ✅ HASH the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword, // <-- use hashed password
      avatar,
      channels,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};



export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.json({
      user: {
        userId:   user._id,
        username: user.username,
        email:    user.email,
        avatar:   user.avatar,
        channels: user.channels,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
}


