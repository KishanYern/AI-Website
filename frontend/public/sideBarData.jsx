import React from "react";
import * as RiIcons from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiLaptop } from "react-icons/ci";
import { PiSyringe } from "react-icons/pi";
import { RiLungsLine } from "react-icons/ri";
import { BsLungs } from "react-icons/bs";

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
                icon: <CiLaptop />,
            },
            {
                title: "Diabeties Risk Predictor",
                path: "/models/Diabeties",
                icon: <PiSyringe />,
            },
            {
                title: "Pulmonary Embolism Risk Predictor",
                path: "/models/Embolism",
                icon: <RiLungsLine />,
            },
            {
                title: "Lung Cancer Risk Predictor",
                path: "/models/Lung",
                icon: <BsLungs />
            }
        ],
    },
];
