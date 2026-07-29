"use client";

import { TabItem } from "@/types";
import { useTransition } from "react";


interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  activeTab,
  onChange,
  className = "",
}: TabsProps) {
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      onChange(id);
    });
  };

  return (
    <div
      className={`flex items-center gap-8 border-b border-border-light overflow-x-auto select-none font-secondary ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            disabled={isPending}
            className={`flex items-center gap-2 pb-3 pt-1 text-[1rem] font-medium transition-all duration-200 border-b-2 whitespace-nowrap
              ${
                isActive
                  ? "border-brand-primary text-brand-primary"
                  : "border-transparent text-text-dark hover:text-text-primary"
              }`}
          >
            {tab.icon && <span className="text-base">{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
