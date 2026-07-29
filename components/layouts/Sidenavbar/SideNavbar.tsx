"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SignOutModal from "../../modal/SignOutModal";
import SidebarMenuItems from "./sidebarMenuItems";
import SidebarSettingsItems from "./sidebarSettingsItems";

export default function SideNavbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOutConfirm = () => {
    console.log("User successfully signed out!");
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen transition-all duration-300 flex flex-col border-r select-none font-secondary bg-surface text-text-primary border-border-light">
      <div className="flex items-center justify-between px-4 py-0 border-b min-h-[5rem] border-border-light">
        <div className="relative w-45 h-17">
          <Image
            src="/images/Logo.svg"
            alt="3SIXTY Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <SidebarMenuItems pathname={pathname} />

      <SidebarSettingsItems
        pathname={pathname}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {isModalOpen && (
        <SignOutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleSignOutConfirm}
        />
      )}
    </div>
  );
}
