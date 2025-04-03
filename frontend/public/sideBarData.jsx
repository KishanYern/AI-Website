import React from "react";
import * as RiIcons from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiLaptop } from "react-icons/ci";
import { PiSyringe } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsLungs } from "react-icons/bs";
import { MdOutlineSource } from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        path: "/Home",
        icon: <IoHomeOutline />,
    },
    {
        title: "About Us",
        path: "/AboutUs",
        icon: <IoNewspaperOutline />,
    },
    {
        title: "Models",
        path: "/models",
        icon: <RiIcons.RiRobot2Line />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Laptop Predictor",
                path: "/models/Laptop",
                icon: <CiLaptop size={30} />,
            },
            {
                title: "Diabeties Risk Predictor",
                path: "/models/Diabeties",
                icon: <PiSyringe size={30} />,
            },
            {
                title: "Medical Expense Predictor",
                path: "/models/Medical-Expense",
                icon: <FaRegMoneyBillAlt size={30} />,
            },
            {
                title: "Lung Cancer Risk Predictor",
                path: "/models/Lung",
                icon: <BsLungs size={30} />
            }
        ],
    },
    {
        title: 'Sources',
        path: "/sources",
        icon: <MdOutlineSource />
    }
];
