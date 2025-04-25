// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, UserCircle, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

// 👉 Replace this with your actual backend URL
const BACKEND_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Header component that renders the top navigation bar with logo, search form, and user info
function Header({ toggleSidebar, searchQuery, setSearchQuery, handleSearchSubmit }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage the search bar visibility
  const [user, setUser] = useState(null); // State to store the user data (fetched from localStorage)

  // useEffect hook to retrieve user data from localStorage when the component is mounted
  useEffect(() => {
    const u = localStorage.getItem("user"); // Get user data from localStorage
    if (u) {
      // Parse the user data
      const parsed = JSON.parse(u); 
      // Check if avatar path looks correct (for debugging)
      console.log("User:", parsed); 
      // Set the user data in state
      setUser(parsed); 
      
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* ☰ + Logo */}
        <div className="flex flex-row items-center gap-3 flex-shrink-0">
          {/* Button to toggle the sidebar */}
          <button onClick={toggleSidebar} className="cursor-pointer">
            <Menu className="w-6 h-6" /> {/* Menu icon */}
          </button>
          {/* YouTube Logo and Link to Homepage */}
          <Link to="/" className="flex items-center gap-1">
            <img src="/youtube_logo_icon.png" alt="Logo" className="w-6 h-6" />
            <span className="text-xl font-bold text-red-600">YouTube</span> {/* Text logo */}
          </Link>
        </div>

        {/* Search Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission
            handleSearchSubmit(); // Call the handleSearchSubmit function passed as a prop
          }}
          className="flex flex-grow max-w-xl mx-4"
        >
          {/* Search input field */}
          <input
            value={searchQuery} // Controlled input field with searchQuery state
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on change
            type="text"
            placeholder="Search"
            className="flex-grow border rounded-l-full px-4 py-2 focus:outline-none"
          />
          {/* Search button */}
          <button
            type="submit"
            className="bg-gray-200 px-4 rounded-r-full hover:bg-gray-300 cursor-pointer"
          >
            <Search className="w-5 h-5" /> {/* Search icon */}
          </button>
        </form>

        {/* User Info Section */}
        {user ? (
          // If user is logged in, show their profile and avatar
          <Link to="/profile" className="flex items-center gap-2">
            <img
              // Display user's avatar; if avatar URL is not valid, fallback to default image
              src={
                user.avatar?.startsWith("http")
                  ? user.avatar // If the avatar URL is absolute (starts with http), use it directly
                  : `${BACKEND_BASE_URL}${user.avatar}` // Else, prepend the backend base URL to form the complete avatar URL
              }
              alt={user.username} // Use the username as alt text for the avatar image
              className="w-8 h-8 rounded-full border object-cover"
              onError={(e) => {
                e.target.src = "/default-avatar.png"; // Fallback image if the avatar fails to load
              }}
            />
            <span className="font-medium">{user.username}</span> {/* Display the user's username */}
          </Link>
        ) : (
          // If user is not logged in, show the sign-in button
          <Link to="/auth/login">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer">
              <UserCircle className="w-6 h-6" /> {/* User Circle icon */}
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
