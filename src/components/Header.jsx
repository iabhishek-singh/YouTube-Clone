import React, { useEffect, useState } from "react";
import { Menu, UserCircle, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
function Header({ toggleSidebar }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Menu + Logo (always visible) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-red-600 block sm:hidden">YouTube</h1>
          <h1 className="text-xl font-bold text-red-600 hidden sm:block">YouTube</h1>
        </div>

        {/* Mobile View: Collapsible Search Bar */}
        <div className="flex-grow sm:hidden">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="flex-grow border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
              />
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Desktop View: Always Show Search Bar */}
        <div className="hidden sm:flex items-center gap-2 flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
          />
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Sign In */}
        <div className="flex-shrink-0">
          {user ? (
            <span className="font-medium">Hi, {user.username}</span>
          ) : (
          < Link to="/auth/login" >
            <button
              className="flex items-center gap-2 border border-transparent bg-blue-600 text-white px-4 py-1.5 rounded-3xl hover:bg-gray-100 hover:text-black hover:border-black transition-all duration-200 cursor-pointer"
            >
              <UserCircle className="w-6 h-6" />
              <span className="hidden sm:inline">Sign In</span>
            </button></Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
