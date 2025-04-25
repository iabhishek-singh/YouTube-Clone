import React, { useState } from "react";
// Import Outlet from react-router-dom to render the nested routes
import { Outlet } from "react-router-dom";
// Import Header and Sidebar components for the layout
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  // State variables for managing sidebar visibility and expansion, search query, and selected category
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to toggle the sidebar based on screen size
  function toggleSidebar() {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen); // For mobile screens, toggle open/close
    } else {
      setIsSidebarExpanded(!isSidebarExpanded); // For larger screens, toggle expansion
    }
  }

  // Function to handle the search form submission
  function handleSearchSubmit() {
    console.log("Search submitted:", searchQuery);
    setSubmittedSearchQuery(searchQuery); // Update the submitted search query for filtering content
  }

  // Categories for the category filter
  const categories = ["All", "Education", "Music", "Web Development", "Career247"];

  return (
    <div>
      <div className="relative md:flex">
        {/* Sidebar component with isOpen and isExpanded props passed */}
        <Sidebar isOpen={isSidebarOpen} isExpanded={isSidebarExpanded} />

        {/* Mobile backdrop to close sidebar when clicked */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)} // Close the sidebar when backdrop is clicked
          />
        )}

        {/* Main content area */}
        <div className="flex-1 min-h-screen bg-gray-100">
          {/* Header component with search functionality */}
          <Header
            toggleSidebar={toggleSidebar}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchSubmit={handleSearchSubmit}
          />

          {/* Category filter bar */}
          <div className="flex flex-wrap gap-2 px-4 py-2 bg-white shadow-sm overflow-x-auto sticky top-0 z-50">
            {/* Map through categories and render them as buttons */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)} // Update selected category on click
                className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-black text-white shadow-md" // Highlight the selected category
                    : "bg-gray-200 text-black hover:bg-gray-300 shadow-md cursor-pointer"
                }`}
              >
                {cat} {/* Display category name */}
              </button>
            ))}
          </div>

          {/* Main content area where the nested routes will be displayed */}
          <main className="p-4 text-center text-2xl">
            {/* Outlet for rendering nested routes with selectedCategory and submittedSearchQuery passed as context */}
            <Outlet context={{ selectedCategory, searchQuery: submittedSearchQuery }} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
