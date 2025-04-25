// index.js - Entry point of the application

// Import the app configuration from the app.js file
import app from "./app.js";

// Set the port from environment variables or default to 5000 if not specified
const PORT = process.env.PORT || 5000;

// Start the server and log the port it's running on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
