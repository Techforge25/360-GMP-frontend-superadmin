"use client";

import { useState } from "react";
import { TabItem } from "@/types";
import TabButton from "./TabButton";

interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  defaultActiveTab?: string;
  onTabChange?: (id: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  activeTab,
  defaultActiveTab,
  onTabChange,
  className = "",
}: TabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id
  );

  const selectedTab = activeTab ?? internalActiveTab;

  const handleTabChange = (id: string) => {
    if (!activeTab) {
      setInternalActiveTab(id);
    }

    onTabChange?.(id);
  };

  return (
    <div
      className={`flex items-center gap-13 border-b border-border-light overflow-x-auto select-none font-secondary ${className}`}
    >
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          activeTab={selectedTab}
          onClick={() => handleTabChange(tab.id)}
        />
      ))}
    </div>
  );
}