// src/components/Home.jsx
import React from "react";
// Import VideoList component to display the list of videos
import VideoList from "./VideoList";
// Import useOutletContext from react-router-dom to access the selected category and search query from parent route
import { useOutletContext } from "react-router-dom";

function Home() {
  // Retrieve selectedCategory and searchQuery from the parent route context using useOutletContext
  const { selectedCategory, searchQuery } = useOutletContext();

  let user = null;
  try {
    // Attempt to retrieve and parse the logged-in user's data from localStorage
    user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    // If there is an error (e.g., user data is invalid), user will remain null
  }

  return (
    <div>
      {/* Pass the selectedCategory and searchQuery as props to VideoList component to filter videos */}
      <VideoList selectedCategory={selectedCategory} searchQuery={searchQuery} />

      {/* Show a welcome message if the user is not logged in */}
      {!user && (
        <div className="mt-8 text-2xl text-center text-gray-600">
          Welcome to YouTube Clone!
        </div>
      )}
    </div>
  );
}

export default Home;
