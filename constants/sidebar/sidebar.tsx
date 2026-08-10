import { JSX } from "react";
import { FaUsers } from "react-icons/fa6";
import {
  FiGrid,
  FiAward,
  FiFileText,
  FiDollarSign,
  FiActivity,
  FiBriefcase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";

export interface NavigationItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

export const sidebarMenuItems: NavigationItem[] = [
  {
    name: "Dashboard",
    icon: <FiGrid className="w-[1.05rem] h-[1.05rem]"/>,
    path: "/dashboard",
  },
  {
    name: "Account Management",
    icon: <FaUsers className="w-[1.05rem] h-[1.05rem]" />,
    path: "/account-management",
  },
  {
    name: "Subscription & Access",  
    icon: <FiAward className="w-[1.05rem] h-[1.05rem]" />,
    path: "/subscription",
  },
  {
    name: "Marketplace & Order Logs",
    icon: <FiFileText className="w-[1.05rem] h-[1.05rem]" />,
    path: "/marketplace",
  },
  {
    name: "Financial Hub",
    icon: <FiDollarSign className="w-[1.05rem] h-[1.05rem]" />,
    path: "/finance",
  },
  {
    name: "Communities & Networking",
    icon: <FiActivity className="w-[1.05rem] h-[1.05rem]"/>,
    path: "/communities",
  },
  {
    name: "Recruitment (Job Board)",
    icon: <FiBriefcase className="w-[1.05rem] h-[1.05rem]"/>,
    path: "/jobs",
  },
   {
    name: "Reports",
    icon: <IoAlertCircleOutline className="w-[1.05rem] h-[1.05rem]"/>,
    path: "/reports",
  },
];

export const sidebarSettingsItems: NavigationItem[] = [
  {
    name: "Settings",
    icon: <FiSettings className="w-[1.05rem] h-[1.05rem]"/>,
    path: "/settings",
  },
  {
    name: "Sign Out",
    icon: <FiLogOut className="w-[1.05rem] h-[1.05rem]"/>,
    path: "",
  },
];