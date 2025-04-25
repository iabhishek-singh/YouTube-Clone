// src/components/services/api.js
import axios from "axios";

// Create an Axios instance with a default base URL
const instance = axios.create({
  baseURL: "http://localhost:5000/api" // Set the base URL for API requests
});

// Interceptor to add Authorization token to requests
instance.interceptors.request.use((config) => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // If token exists, add it to the request headers
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Export the Axios instance for use in other components
export default instance;
