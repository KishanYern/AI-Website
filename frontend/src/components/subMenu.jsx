import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item, showSidebar }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = (e) => {
        if (item.subNav) {
            e.preventDefault(); // Prevent navigation when submenu exists
            setSubnav(!subnav);
        } else {
            // If there's no submenu, close sidebar
            showSidebar();
        }
    };

    return (
        <>
            {/* Main Menu Item */}
            <Link 
                to={item.subNav ? "#" : item.path} // Prevents navigation when subnav exists
                onClick={showSubnav}
                className="flex justify-between items-center p-5 text-lg text-blue-200 
                           hover:bg-gray-800 hover:border-l-4 hover:border-[#376996] cursor-pointer"
            >
                <div className="flex items-center">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                </div>
                <div>
                    {item.subNav && (subnav ? item.iconOpened : item.iconClosed)}
                </div>
            </Link>

            {/* Submenu with Smooth Dropdown */}
            <div 
                className={`overflow-hidden transition-all duration-500 ${
                    subnav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {item.subNav && item.subNav.map((subItem, index) => (
                    <Link 
                        to={subItem.path} 
                        key={index} 
                        onClick={() => showSidebar()} // Ensure function runs properly
                        className="flex items-center pl-8 h-20 text-white text-lg 
                                bg-gray-800 hover:bg-[#376996] cursor-pointer"
                    >
                        {subItem.icon}
                        <span className="ml-4">{subItem.title}</span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default SubMenu;
