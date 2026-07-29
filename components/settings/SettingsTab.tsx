"use client";

import { TabItem } from "@/types/index";

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function SettingsTab({
  tabs,
  activeTab,
  setActiveTab,
}: TabsProps) {
  return (
    <div className="flex items-center gap-8 border-b border-border-light overflow-x-auto select-none font-secondary">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 pb-3 pt-1 text-[1rem] font-medium transition-all duration-200 border-b-2 whitespace-nowrap
              ${
                isActive
                  ? "border-brand-primary text-brand-primary "
                  : "border-transparent text-text-dark hover:text-text-primary"
              }`}
          >
            <span className="text-base">{tab.icon}</span>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
