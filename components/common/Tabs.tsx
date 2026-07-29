import { TabItem } from "@/types";
import TabButton from "./TabButton";

interface TabsProps {
  tabs: TabItem[];
  className?: string;
}

export default function Tabs({
  tabs,
  className = "",
}: TabsProps) {

  const activeTab =
    tabs.find((tab) => tab.active)?.id || tabs[0]?.id;

  return (
    <div
      className={`flex items-center gap-8 border-b border-border-light overflow-x-auto select-none font-secondary ${className}`}
    >
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
}