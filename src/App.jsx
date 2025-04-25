import React from "react";
import { Outlet } from "react-router-dom";  // Used to render the matched child route's component
import './App.css';  // Importing CSS file for styling

function App() {
  return (
    <div>
      {/* The Outlet component is a placeholder that renders the matched child route */}
      <Outlet />
    </div>
  );
}

export default App;
