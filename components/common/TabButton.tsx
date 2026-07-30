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
      className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 pt-1 text-[1rem] font-medium transition-all duration-200 cursor-pointer
        ${
          isActive
            ? "border-brand-primary text-brand-primary"
            : "border-transparent text-text-dark hover:text-text-primary"
        }
      `}
    >
      {tab.icon && <span className="text-base">{tab.icon}</span>}
      {tab.label}
    </button>
  );
}