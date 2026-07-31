import { JSX } from "react";
import {
  FiGrid,
  FiUsers,
  FiAward,
  FiFileText,
  FiDollarSign,
  FiActivity,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";

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
    icon: <FiUsers />,
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
];

export const sidebarSettingsItems: NavigationItem[] = [
  {
    name: "Settings",
    icon: <FiSettings />,
    path: "/settings",
  },
];