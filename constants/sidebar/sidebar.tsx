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
    icon: <FiGrid />,
    path: "/dashboard",
  },
  {
    name: "Account Management",
    icon: <FaUsers  />,
    path: "/account-management",
  },
  {
    name: "Subscription & Access",  
    icon: <FiAward />,
    path: "/subscription",
  },
  {
    name: "Marketplace & Order Logs",
    icon: <FiFileText />,
    path: "/marketplace",
  },
  {
    name: "Financial Hub",
    icon: <FiDollarSign />,
    path: "/finance",
  },
  {
    name: "Communities & Networking",
    icon: <FiActivity />,
    path: "/communities",
  },
  {
    name: "Recruitment (Job Board)",
    icon: <FiBriefcase />,
    path: "/jobs",
  },
   {
    name: "Reports",
    icon: <IoAlertCircleOutline />,
    path: "/reports",
  },
];

export const sidebarSettingsItems: NavigationItem[] = [
  {
    name: "Settings",
    icon: <FiSettings />,
    path: "/settings",
  },
  {
    name: "Sign Out",
    icon: <FiLogOut />,
    path: "",
  },
];