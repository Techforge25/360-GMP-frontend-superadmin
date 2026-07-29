import Link from "next/link";
import React from "react";
import { FiChevronRight, FiLogOut, FiUser, FiX } from "react-icons/fi";
import { sidebarSettingsItems as settingsItemsData } from "@/constants/sidebar/sidebar";

interface NavigationItem {
  name: string;
  icon: React.JSX.Element;
  path: string;
}

interface SidebarSettingsItemsProps {
  pathname: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function SidebarSettingsItems({
  pathname,
  isDropdownOpen,
  setIsDropdownOpen,
  setIsModalOpen,
}: SidebarSettingsItemsProps) {
  return (
    <div className="mt-auto flex flex-col gap-3 px-3 pb-4 border-t pt-7 border-border-light">
      {settingsItemsData.map((item: NavigationItem, index: number) => {
        const isSelected = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 font-medium ${
              isSelected
                ? "bg-brand-setting-ligh text-text-primary"
                : "bg-surface text-text-primary hover:bg-brand-setting-ligh"
            }`}
          >
            <span className="text-[1rem]">{item.icon}</span>
            <span className="text-[1rem]">{item.name}</span>
          </Link>
        );
      })}

      <div className="relative w-full">
        <div
          className={`absolute bottom-[110%] left-60 w-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 py-2 px-1 z-50 flex flex-col gap-1 transition-all duration-300 ease-out origin-bottom-left ${
            isDropdownOpen
              ? "opacity-100 scale-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 scale-95 translate-y-2 invisible pointer-events-none"
          }`}
        >
          <Link
            href="/dashboard/my-profile"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 text-text-primary transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            <FiUser className="text-[1.1rem]" />
            <span className="text-sm font-medium">My Profile</span>
          </Link>

          <button
            className="w-full flex items-center gap-3 cursor-pointer px-3 py-2.5 rounded-lg hover:bg-[#FFDFDF] text-text-primary transition-colors"
            onClick={() => {
              setIsDropdownOpen(false);
              setIsModalOpen(true);
            }}
          >
            <FiLogOut className="text-[1.1rem]" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>

        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer flex items-center justify-between bg-brand-setting-ligh text-text-primary rounded-xl transition-all duration-300 p-3"
        >
          <div className="flex items-center gap-3">
            <div className="user-sidebar">
              <FiUser className="text-lg" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-text-primary text-sm tracking-wide">
                John Doe
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Super Admin
              </span>
            </div>
          </div>

          <div className="ml-2 relative w-5 h-5 flex items-center justify-center">
            <FiX
              className={`absolute text-text-primary text-xl font-bold transition-all duration-300 transform ${
                isDropdownOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              }`}
            />
            <FiChevronRight
              className={`absolute text-text-primary text-xl font-bold transition-all duration-300 transform ${
                isDropdownOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}