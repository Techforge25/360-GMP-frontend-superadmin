import Link from "next/link";
import React from "react";
import { FiChevronRight, FiLogOut, FiUser, FiX } from "react-icons/fi";
import { sidebarSettingsItems as settingsItemsData } from "@/constants/sidebar/sidebar";
import { useNavigationStore } from "@/store/modulesStore";

interface NavigationItem {
  name: string;
  icon: React.JSX.Element;
  path: string;
}

interface Props {
  pathname: string;
  openSignOutModal: () => void;
}

export default function SidebarSettingsItems({
  pathname,
  openSignOutModal,
}: Props) {
  const type = useNavigationStore((state) => state.type)
  return (
    <div className="mt-auto flex flex-col gap-3 px-3 pb-4 border-t pt-7 border-border-light">
      {settingsItemsData.map((item: NavigationItem, index: number) => {
        const isSelected = pathname === item.path;
        const className = `flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 font-medium ${isSelected
          ? "bg-brand-setting-ligh text-text-primary"
          : "bg-surface text-text-primary hover:bg-brand-setting-ligh"
          }`;

        if (item.name === "Sign Out") {
          return (
            <button
              key={index}
              type="button"
              onClick={openSignOutModal}
              className={`${className} w-full text-left cursor-pointer`}
            >
              <span className="text-[1rem]">{item.icon}</span>
              <span className="text-[1rem]">{item.name}</span>
            </button>
          );
        }

        return (
          <div key={index}>
            {type === 'superAdmin' ? (
              <Link key={index} href={item.path} className={className}>
                <span className="text-[1rem]">{item.icon}</span>
                <span className="text-[1rem]">{item.name}</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div >
  );
}
