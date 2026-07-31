"use client";

import { TabItem } from "@/types";

interface TabButtonProps {
  tab: TabItem;
  activeTab: string;
  onClick: () => void;
}

export default function TabButton({
  tab,
  activeTab,
  onClick,
}: TabButtonProps) {
  const isActive = activeTab === tab.id;

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 whitespace-nowrap pb-3 pt-1 text-[1rem] font-medium transition-colors duration-300 cursor-pointer
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:transition-transform after:duration-300
        ${
          isActive
            ? "text-brand-primary after:bg-brand-primary after:scale-x-100"
            : "text-text-dark hover:text-brand-primary after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100"
        }
      `}
    >
      {tab.icon && <span className="text-base">{tab.icon}</span>}
      {tab.label}
    </button>
  );
}