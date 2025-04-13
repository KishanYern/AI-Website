import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../../public/sideBarData.jsx";
import SubMenu from "./subMenu";
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white h-16 flex items-center px-6 shadow-md">
        <button 
          onClick={showSidebar} 
          className="text-black text-2xl hover:scale-110 transition-transform duration-500 focus:outline-none"
        >
          <FaBars />
        </button>
        <h1 className="text-black text-xl md:text-3xl mx-auto tracking-wider font-semibold">
            AI Showcase
        </h1>
      </nav>

      {/* Sidebar */}
      <motion.div 
        className={`fixed top-0 left-0 w-64 h-full z-50 transform ${sidebar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500`}
        initial={{ x: "-100%" }}
        animate={{ x: sidebar ? 0 : "-100%" }}
      >
        <aside className="w-64 h-full bg-blue-800 bg-opacity-95 backdrop-blur-sm text-white shadow-2xl flex flex-col">
          {/* Close Button */}
          <div className="p-4 flex justify-end">
            <button 
              onClick={showSidebar} 
              className="text-white text-2xl hover:scale-110 transition-transform duration-300 focus:outline-none"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Sidebar Items */}
          <nav className="flex-1 overflow-y-auto">
            {SidebarData.map((item, index) => (
              <SubMenu item={item} key={index} showSidebar={showSidebar} />
            ))}
          </nav>
        </aside>
      </motion.div>
    </>
  );
};

export default Sidebar;
