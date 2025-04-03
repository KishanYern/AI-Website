import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../../public/sideBarData.jsx";
import SubMenu from "./subMenu";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => {
        setSidebar(!sidebar)
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white h-16 flex items-center px-6 shadow-md">
                <button 
                    onClick={showSidebar} 
                    className="text-black text-2xl hover:scale-110 transition duration-500"
                >
                    <FaBars />
                </button>
                <h1 className="text-black text-lg md:text-3xl mx-auto tracking-wide font-roboto font-semibold">
                    Machine Learning Prediction
                </h1>
            </nav>

            {/* Sidebar */}
            <div className={`fixed inset-0 z-50 flex ${sidebar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500`}>
                <aside className="w-64 h-full bg-[#1F487E] bg-opacity-90 backdrop-blur-md text-white shadow-lg flex flex-col">
                    {/* Close Button */}
                    <div className="p-4 flex justify-end">
                        <button onClick={showSidebar} className="text-white text-2xl hover:scale-110 transition duration-300">
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
            </div>
        </>
    );
};

export default Sidebar;
