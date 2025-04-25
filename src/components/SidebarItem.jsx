import React from "react";

// SidebarItem component that represents an individual item in the sidebar
function SidebarItem({ icon, label, isExpanded }) {
  return (
    // The div element represents a clickable sidebar item
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
      {/* Display the icon passed as a prop */}
      {icon}

      {/* Conditionally display the label based on the isExpanded prop */}
      {isExpanded && <span>{label}</span>}
    </div>
  );
}

export default SidebarItem;
