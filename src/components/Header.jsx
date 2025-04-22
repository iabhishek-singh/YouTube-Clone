import React, { useEffect, useState } from "react";
import { Menu, UserCircle, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

// 👉 Replace this with your actual backend URL
const BACKEND_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Header({ toggleSidebar, searchQuery, setSearchQuery, handleSearchSubmit }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) {
      const parsed = JSON.parse(u);
      console.log("User:", parsed); // Check if avatar path looks correct
      setUser(parsed);
    }
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* ☰ + Logo */}
        <div className="flex flex-row items-center gap-3 flex-shrink-0">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center gap-1">
            <img src="/youtube_logo_icon.png" alt="Logo" className="w-6 h-6" />
            <span className="text-xl font-bold text-red-600">YouTube</span>
          </Link>
        </div>

        {/* Search Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchSubmit();
          }}
          className="flex flex-grow max-w-xl mx-4"
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-grow border rounded-l-full px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-200 px-4 rounded-r-full hover:bg-gray-300 cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* User Info */}
        {user ? (
          <Link to="/profile" className="flex items-center gap-2">
            <img
              src={
                user.avatar?.startsWith("http")
                  ? user.avatar
                  : `${BACKEND_BASE_URL}${user.avatar}`
              }
              alt={user.username}
              className="w-8 h-8 rounded-full border object-cover"
              onError={(e) => {
                e.target.src = "/default-avatar.png"; // fallback image
              }}
            />
            <span className="font-medium">{user.username}</span>
          </Link>
        ) : (
          <Link to="/auth/login">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer">
              <UserCircle className="w-6 h-6" /> Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;


// import React, { useEffect, useState } from "react";
// import { Menu, UserCircle, Search, X } from "lucide-react";
// import { Link } from "react-router-dom";

// function Header({ toggleSidebar, searchQuery, setSearchQuery, handleSearchSubmit }) {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const u = localStorage.getItem("user");
//     if (u) {
//       const parsed = JSON.parse(u);
//       console.log("User:", parsed); // <-- Check avatar value in console
//       setUser(parsed);
//     }
//   }, []);

//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-10xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
//         {/* ☰ + Logo */}
//         {/* ☰ + Logo */}
//         <div className="flex flex-row items-center gap-3 flex-shrink-0">
//           {/* Toggle Button */}
//           <button onClick={toggleSidebar} className="cursor-pointer">
//             <Menu className="w-6 h-6" />
//           </button>

//           {/* Logo + Text */}
//           <Link to="/" className="flex items-center gap-1">
//             <img src="/youtube_logo_icon.png" alt="Logo" className="w-6 h-6" />
//             <span className="text-xl font-bold text-red-600">YouTube</span>
//           </Link>
//         </div>


//         {/* Search Form */}
//         <form
//           onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}
//           className="flex flex-grow max-w-xl mx-4"
//         >
//           <input
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             type="text"
//             placeholder="Search"
//             className="flex-grow border rounded-l-full px-4 py-2 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-gray-200 px-4 rounded-r-full hover:bg-gray-300 cursor-pointer"
//           >
//             <Search className="w-5 h-5" />
//           </button>
//         </form>

//         {/* User Info */}
//         {user ? (
//           <Link to="/profile" className="flex items-center gap-2">
//             <img
//               src={user.avatar}
//               alt={user.username}
//               className="w-8 h-8 rounded-full border"
//             />
//             <span className="font-medium">{user.username}</span>
//           </Link>
//         ) : (
//           <Link to="/auth/login" >

//             <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 cursor-pointer">
//               <UserCircle className="w-6 h-6" /> Sign In
//             </button>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;



