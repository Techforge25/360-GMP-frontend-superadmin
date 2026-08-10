"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";

import SidebarMenuItems from "./sidebarMenuItems";
import SidebarSettingsItems from "./sidebarSettingsItems";

import SignOutModal, { SignOutModalRef } from "@/components/modal/SignOutModal";
import { logout } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export default function SideNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      signOutModalRef.current?.close();
      router.push("/");
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  const { isPending } = logoutMutation;

  const signOutModalRef = useRef<SignOutModalRef>(null);

  const handleSignOutConfirm = () => {
    logoutMutation.mutate();
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
        openSignOutModal={() => signOutModalRef.current?.open()}
      />

      <SignOutModal ref={signOutModalRef} onConfirm={handleSignOutConfirm}  isPending={isPending}/>
    </div>
  );
}
