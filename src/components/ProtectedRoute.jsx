import React from "react";
// Import Navigate from react-router-dom for handling redirection
import { Navigate } from "react-router-dom";

// ProtectedRoute component to protect routes that require user authentication
function ProtectedRoute({ children }) {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // If the user is not logged in (user is null or undefined), redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />; // Navigate to the login page
  }

  // If the user is logged in, render the children (protected content)
  return children;
}

export default ProtectedRoute;
