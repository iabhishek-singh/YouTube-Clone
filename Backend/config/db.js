// Import Mongoose to interact with MongoDB
import mongoose from "mongoose";

// Import dotenv to load environment variables from a .env file
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Async function to connect to MongoDB
export async function connectDB() {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    // If connection fails, log the error and exit the process
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

