import Link from "next/link";
import React from "react";
import { sidebarMenuItems as menuItemsData } from "@/constants/sidebar/sidebar";

interface NavigationItem {
  name: string;
  icon: React.JSX.Element;
  path: string;
}

interface SidebarMenuItemsProps {
  pathname: string;
}

export default function SidebarMenuItems({ pathname }: SidebarMenuItemsProps) {
  return (
    <div className="flex-1 mt-3 flex flex-col gap-1 px-3 overflow-y-auto custom-scrollbar">
      {menuItemsData.map((item: NavigationItem, index: number) => {
        const isSelected = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center whitespace-nowrap gap-3 px-3 py-3 rounded-lg transition-all duration-200 font-medium ${
              isSelected
                ? "bg-brand-primary text-text-inverse"
                : "text-black hover:bg-brand-primary hover:text-text-inverse"
            }`}
          >
            <span className="text-[1rem]">{item.icon}</span>
            <span className="text-[1rem]">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
