"use client";

import { TabItem } from "@/types";
import TabButton from "./TabButton";

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: TabsProps) {
  return (
    <div
      className={`flex items-center gap-13 border-b border-border-light overflow-x-auto select-none font-secondary ${className}`}
    >
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          activeTab={activeTab}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  );
}