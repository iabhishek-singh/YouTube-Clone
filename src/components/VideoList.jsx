import React, { useEffect, useState } from "react";
import api from "./services/api";

function VideoList({ selectedCategory = "All", searchQuery = "" }) {
  // State to hold the list of videos
  const [videos, setVideos] = useState([]);

  // Effect to fetch videos when the component mounts
  useEffect(() => {
    async function fetchVideos() {
      try {
        // Fetch videos from the API
        const { data } = await api.get("/videos");
        setVideos(data); // Update state with the fetched data
      } catch (error) {
        // Handle errors
        if (error.response?.status === 401) {
          console.log("Not authenticated—public view");
        } else {
          console.error("Failed to fetch videos:", error);
        }
      }
    }

    fetchVideos(); // Call the function to fetch videos
  }, []); // Empty dependency array means this effect runs once on mount

  // Filter the videos based on selected category and search query
  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;

    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch; // Only include videos that match both filters
  });

  // If no videos match the filter criteria, show a message
  if (!filteredVideos.length) {
    return (
      <div className="p-6 text-center text-gray-500 text-xl">
        No videos found.
      </div>
    );
  }

  // Return a grid of video cards if there are filtered videos
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredVideos.map((video) => (
        <div key={video._id} className="border p-2 rounded shadow">
          {/* Video title */}
          <h2 className="text-lg font-bold">{video.title}</h2>
          
          {/* Channel name */}
          <p className="text-sm text-gray-500">{video.chanleName}</p>
          
          {/* Watch link */}
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Watch
          </a>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
