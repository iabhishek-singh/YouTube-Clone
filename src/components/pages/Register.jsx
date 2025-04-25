// src/components/pages/Register.jsx
import React, { useState } from "react";
import axios from "axios"; // Axios for making HTTP requests
import { useNavigate, Link } from "react-router-dom"; // For navigation
import 'animate.css'; // For animation effects

// Register component
function Register() {
  // State variables to store form data
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    avatarUrl: "",
    channels: ""
  });
  // State variable to store avatar file (if any)
  const [avatarFile, setAvatarFile] = useState(null);
  // State variables for error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle form input changes and update the form state
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submission (register)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData();
    formData.append("username", form.username.trim());
    formData.append("email", form.email.trim());
    formData.append("password", form.password);
    formData.append("channels", form.channels);

    // Attach avatar file or avatar URL to the form data
    if (avatarFile) {
      formData.append("avatar", avatarFile); // Avatar file upload
    } else if (form.avatarUrl) {
      formData.append("avatarUrl", form.avatarUrl); // Optional URL fallback
    }

    try {
      // Sending registration data to the backend API
      const res = await axios.post("http://localhost:5000/api/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess("Registration successful! Redirecting to login...");
      setError("");
      console.log(res.data);

      // Redirect to the login page after a delay
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    } catch (err) {
      // Handle error and display error message
      const message =
        err.response?.data?.message || err.message || "Registration failed";
      setError(message);
      setSuccess("");
      console.error(err.response.data);
    }
  };

  return (
    <div className="mt-15 p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
      {/* Title of the Register page */}
      <h2 className="text-3xl font-semibold text-center mb-8 text-red-600 animate__animated animate__fadeIn">Register</h2>
      
      {/* Display error message if any */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 animate__animated animate__fadeIn animate__delay-1s">
          {error}
        </div>
      )}

      {/* Display success message after successful registration */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 animate__animated animate__fadeIn animate__delay-1s">
          {success}
        </div>
      )}
      
      {/* Registration form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username input */}
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        {/* Email input */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        {/* Password input */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        {/* Avatar file input */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatarFile(e.target.files[0])}
          className="w-full border p-3 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        {/* Avatar URL input */}
        <input
          name="avatarUrl"
          placeholder="Or enter Avatar URL"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        {/* Channel name input */}
        <input
          name="channels"
          type="text"
          placeholder="Channel name"
          onChange={handleChange}
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        
        {/* Submit button */}
        <button className="bg-blue-600 text-white px-4 py-3 rounded-md w-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer">
          Register
        </button>
      </form>

      {/* Link to navigate to login page */}
      <div className="text-center mt-6">
        <span className="text-gray-600">Already have an account?</span>
        <Link to="/auth/login" className="text-blue-700 p-1.5 hover:underline font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;

/**
 * 
 */