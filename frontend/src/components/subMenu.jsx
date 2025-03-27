import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubnav} className="flex justify-between items-center p-5 text-lg text-blue-200 hover:bg-gray-800 hover:border-l-4 hover:border-green-500 cursor-pointer">
                <div className="flex items-center">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </Link>
            {subnav && item.subNav.map((subItem, index) => (
                <Link to={subItem.path} key={index} className="flex items-center pl-12 h-14 text-white text-lg bg-gray-800 hover:bg-green-500 cursor-pointer">
                    {subItem.icon}
                    <span className="ml-4">{subItem.title}</span>
                </Link>
            ))}
        </>
    );
};

export default SubMenu