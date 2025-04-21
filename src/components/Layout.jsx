import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // desktop

  function toggleSidebar() {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarExpanded(!isSidebarExpanded);
    }
  }

  return (
    <div className="relative md:flex">
      <Sidebar isOpen={isSidebarOpen} isExpanded={isSidebarExpanded} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 min-h-screen bg-gray-100">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4 text-center text-2xl">{children || "Welcome to YouTube Clone!"}</main>
      </div>
    </div>
  );
}

export default Layout;


