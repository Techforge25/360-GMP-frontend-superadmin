"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import SidebarMenuItems from "./sidebarMenuItems";
import SidebarSettingsItems from "./sidebarSettingsItems";

import SignOutModal, {
  SignOutModalRef,
} from "@/components/modal/SignOutModal";

export default function SideNavbar() {
  const pathname = usePathname();

  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  const signOutModalRef =
    useRef<SignOutModalRef>(null);

  const handleSignOutConfirm = () => {
    console.log("User successfully signed out!");
    signOutModalRef.current?.close();
  };

  return (
    <div className="h-screen flex flex-col border-r bg-surface border-border-light">

      <div className="flex items-center px-4 min-h-[5rem] border-b border-border-light">
        <div className="relative w-45 h-17">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
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
        openSignOutModal={() =>
          signOutModalRef.current?.open()
        }
      />

      <SignOutModal
        ref={signOutModalRef}
        onConfirm={handleSignOutConfirm}
      />

    </div>
  );
}