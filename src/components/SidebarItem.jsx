import React from "react";

function SidebarItem({ icon, label, isExpanded }) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
      {icon}
      {isExpanded && <span>{label}</span>}
    </div>
  );
}

export default SidebarItem;
