// src/components/pages/Login.jsx
import React, { useState } from "react";
import api from "../services/api"; // Import API service to interact with backend
import { useNavigate, Link } from "react-router-dom"; // Import navigation hooks
import 'animate.css'; // Import animate.css for animation effects

// Login component
function Login() {
  // State to store form data (email, password)
  const [form, setForm] = useState({ email: "", password: "" });
  // State to store error message
  const [error, setError] = useState("");
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle input changes and update form state
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submission for login
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Send login request to backend
      const { data } = await api.post("/auth/login", form);
      // Save token and user data to localStorage on successful login
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // Navigate to home page and reload
      navigate("/");
      window.location.reload();
    } catch (err) {
      // Display error message if login fails
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="mt-15 p-6 max-w-md mx-auto bg-white rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn">
      {/* Title of the login page */}
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">Login</h2>

      {/* Display error message if any */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 animate__animated animate__fadeIn animate__delay-1s">
          {error}
        </div>
      )}

      {/* Login form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email input field */}
        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
        </div>

        {/* Password input field */}
        <div className="relative">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            required
          />
        </div>

        {/* Submit button for login */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer">
          Login
        </button>
      </form>

      {/* Link to register page if the user doesn't have an account */}
      <p className="mt-6 text-center text-gray-600">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-blue-700 font-medium hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;

/**
 * Descriptions:
State Variables:form: Stores the user input for email and password.
error: Stores any error messages to display when login fails.
Functions handleChange: Updates the state with the user's input for each field (email, password).
handleSubmit: Handles the login submission, sending the login request to the backend and storing the response (JWT token and user data) in localStorage.

UI:The Login form is displayed in a styled container with a fade-in animation.

The error message is shown if the login fails.
After a successful login, the page navigates to the home page and reloads.
*/