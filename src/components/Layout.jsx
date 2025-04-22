import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // desktop

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function toggleSidebar() {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarExpanded(!isSidebarExpanded);
    }
  }

  function handleSearchSubmit() {
    console.log("Search submitted:", searchQuery);
  }

  const categories = ["All", "Education", "Music", "Web Development", "Career247"];

  return (
    <div>         
      <div className="relative md:flex">
        <Sidebar isOpen={isSidebarOpen} isExpanded={isSidebarExpanded} />

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 min-h-screen bg-gray-100">
          <Header
            toggleSidebar={toggleSidebar}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchSubmit={handleSearchSubmit}
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 px-4 py-2 bg-white shadow-sm overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap ${selectedCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-200 text-black hover:bg-gray-300 shadow-md"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main content */}
          <main className="p-4 text-center text-2xl">
            {children || "Welcome to YouTube Clone!"}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;


// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // desktop

//   const [searchQuery, setSearchQuery] = useState("");

//   function toggleSidebar() {
//     if (window.innerWidth < 768) {
//       setIsSidebarOpen(!isSidebarOpen);
//     } else {
//       setIsSidebarExpanded(!isSidebarExpanded);
//     }
//   }

//   function handleSearchSubmit() {
//     console.log("Search submitted:", searchQuery);
//     // TODO: Add navigation or filtering logic here if needed
//   }

//   return (
//     <div className="relative md:flex">
//       <Sidebar isOpen={isSidebarOpen} isExpanded={isSidebarExpanded} />

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <div className="flex-1 min-h-screen bg-gray-100">
//         <Header
//           toggleSidebar={toggleSidebar}
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           handleSearchSubmit={handleSearchSubmit}
//         />
//         <main className="p-4 text-center text-2xl">
//           {children || "Welcome to YouTube Clone!"}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Layout;


// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // desktop

//   function toggleSidebar() {
//     if (window.innerWidth < 768) {
//       setIsSidebarOpen(!isSidebarOpen);
//     } else {
//       setIsSidebarExpanded(!isSidebarExpanded);
//     }
//   }

//   return (
//     <div className="relative md:flex">
//       <Sidebar isOpen={isSidebarOpen} isExpanded={isSidebarExpanded} />

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <div className="flex-1 min-h-screen bg-gray-100">
//         <Header toggleSidebar={toggleSidebar} />
//         <main className="p-4 text-center text-2xl">{children || "Welcome to YouTube Clone!"}</main>
//       </div>
//     </div>
//   );
// }

// export default Layout;


