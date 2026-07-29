"use client";

import { TabItem } from "@/types";
import { useTransition } from "react";

interface TabButtonProps {
  tab: TabItem;
  activeTab: string;
}

export default function TabButton({
  tab,
  activeTab,
}: TabButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      console.log(tab.id);
    });
  };

  const isActive = activeTab === tab.id;

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 pt-1 text-[1rem] font-medium transition-all duration-200
        ${
          isActive
            ? "border-brand-primary text-brand-primary"
            : "border-transparent text-text-dark hover:text-text-primary"
        }
      `}
    >
      {tab.icon && (
        <span className="text-base">
          {tab.icon}
        </span>
      )}

      {tab.label}
    </button>
  );
}