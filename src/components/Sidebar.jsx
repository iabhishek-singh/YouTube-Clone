import React from "react";
import {Link} from "react-router-dom";
import {
  Home, Compass, Clock, UserCircle,Music,
  Tv,Signal,Gamepad2,Newspaper,Trophy,
  GraduationCap,Shirt,Podcast,Settings,
  Flag,} from "lucide-react";

function Sidebar({ isOpen, isExpanded }) {
  const sidebarBase =
  "bg-white fixed top-0 left-0 z-40 shadow-md transition-all duration-300 ease-in-out md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto";

  const sidebarMobile = isOpen ? "translate-x-0" : "-translate-x-full";
  const sidebarDesktop = isExpanded ? "w-64" : "w-20";

  const showLabel = isExpanded || window.innerWidth < 768;

  return (
    <aside
      className={`${sidebarBase} ${window.innerWidth < 768 ? sidebarMobile : sidebarDesktop}`}
    >
      <div className="mt-16 p-4 space-y-2">
        <SidebarItem icon={<Home />} label="Home" showLabel={showLabel} />
        <SidebarItem icon={<Compass />} label="Explore" showLabel={showLabel} />
        <SidebarItem icon={<Clock />} label="History" showLabel={showLabel} />

        <hr className="my-4" />

        {showLabel && (
          <>
            <p className="text-sm text-gray-600 px-2">
              Sign in to like videos, comment, and subscribe.
            </p>
            <Link to="/auth/login">
            <button className="flex items-center gap-2 border border-black text-black px-4 py-1 rounded-2xl hover:bg-gray-100 cursor-pointer mt-2">
              <UserCircle className="w-5 h-5" /> Sign In
            </button></Link>
          </>
        )}
         <h1 className="my-3" />
        <SidebarItem icon={<Music />} label="Music" showLabel={showLabel} />
        <SidebarItem icon={<Tv />} label="Flims" showLabel={showLabel} />
        <SidebarItem icon={<Signal />} label="Live" showLabel={showLabel} />
        <SidebarItem icon={<Gamepad2 />} label="Gaming" showLabel={showLabel} />
        <SidebarItem icon={<Newspaper />} label="News" showLabel={showLabel} />
        <SidebarItem icon={<Trophy />} label="Sport" showLabel={showLabel} />
        <SidebarItem icon={<GraduationCap />} label="Courses" showLabel={showLabel} />
        <SidebarItem icon={<Shirt />} label="Fashion & beauty" showLabel={showLabel} />
        <SidebarItem icon={<Podcast />} label="Podcast" showLabel={showLabel} />
       
        <hr className="my-4" />
         <SidebarItem icon={<Settings />} label="Settings" showLabel={showLabel} />
        <SidebarItem icon={<Flag />} label="Report history" showLabel={showLabel} />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, showLabel }) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
      {icon}
      {showLabel && <span>{label}</span>}
    </div>
  );
}

export default Sidebar;
