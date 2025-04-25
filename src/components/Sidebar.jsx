import React from "react";
import { Link } from "react-router-dom";
// Importing icons from lucide-react
import {
  Home, Compass, Clock, UserCircle, Music,
  Tv, Signal, Gamepad2, Newspaper, Trophy,
  GraduationCap, Shirt, Podcast, Settings,
  Flag, Menu,
} from "lucide-react";
import Header from "./Header";

function Sidebar({ isOpen, isExpanded }) {
  // Base styles for the sidebar
  const sidebarBase =
    "bg-white fixed top-0 left-0 z-40 shadow-md transition-all duration-300 ease-in-out md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto";

  // Styles for mobile sidebar (based on isOpen state)
  const sidebarMobile = isOpen ? "translate-x-0" : "-translate-x-full";
  // Styles for desktop sidebar (based on isExpanded state)
  const sidebarDesktop = isExpanded ? "w-64" : "w-20";

  // Deciding whether to show the label based on sidebar state and screen size
  const showLabel = isExpanded || window.innerWidth < 768;

  return (
    <div>
      <aside
        className={`${sidebarBase} ${window.innerWidth < 768 ? sidebarMobile : sidebarDesktop}`}
      >
        {/* Sidebar Content */}
        <div className="mt-16 p-4 space-y-2">
          {/* Sidebar items with icons and labels */}
          <SidebarItem icon={<Home />} label="Home" showLabel={showLabel} />
          <SidebarItem icon={<Compass />} label="Explore" showLabel={showLabel} />
          <SidebarItem icon={<Clock />} label="History" showLabel={showLabel} />

          {/* Horizontal Divider */}
          <hr className="my-4" />

          {/* Conditional rendering of the sign-in prompt if user is not logged in */}
          {showLabel && (
            <>
              <p className="text-sm text-gray-600 px-2">
                Sign in to like videos, comment, and subscribe.
              </p>
              <Link to="/auth/login">
                <button className="flex items-center gap-2 border border-black text-black px-4 py-1 rounded-2xl hover:bg-gray-100 cursor-pointer mt-2">
                  <UserCircle className="w-5 h-5" /> Sign In
                </button>
              </Link>
            </>
          )}
          <h1 className="my-3" />
          {/* Additional sidebar items */}
          <SidebarItem icon={<Music />} label="Music" showLabel={showLabel} />
          <SidebarItem icon={<Tv />} label="Films" showLabel={showLabel} />
          <SidebarItem icon={<Signal />} label="Live" showLabel={showLabel} />
          <SidebarItem icon={<Gamepad2 />} label="Gaming" showLabel={showLabel} />
          <SidebarItem icon={<Newspaper />} label="News" showLabel={showLabel} />
          <SidebarItem icon={<Trophy />} label="Sport" showLabel={showLabel} />
          <SidebarItem icon={<GraduationCap />} label="Courses" showLabel={showLabel} />
          <SidebarItem icon={<Shirt />} label="Fashion & Beauty" showLabel={showLabel} />
          <SidebarItem icon={<Podcast />} label="Podcast" showLabel={showLabel} />

          <hr className="my-4" />
          {/* Settings and Report History */}
          <SidebarItem icon={<Settings />} label="Settings" showLabel={showLabel} />
          <SidebarItem icon={<Flag />} label="Report History" showLabel={showLabel} />
        </div>
      </aside>
    </div>
  );
}

// SidebarItem component to render individual sidebar items
function SidebarItem({ icon, label, showLabel }) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
      {icon} {/* Display the icon */}
      {showLabel && <span>{label}</span>} {/* Conditionally show the label */}
    </div>
  );
}

export default Sidebar;
