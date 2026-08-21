"use client";
import { useState } from "react";
import Tabs from "@/components/common/Tabs";
import { Communitiestabs } from "@/constants/communities/Communitiestabs";
import CommunityMemberMainTable from "./CommunityMemberMainTable";
import CommunityFeedPage from "../Community-LiveFeed/CommunityFeedPage";

export default function CommunityMember() {
  const [currentTab, setCurrentTab] = useState(
    Communitiestabs[0]?.id || "member",
  );

  return (
    <div className="p-5 pt-3">
      <div className="mt-2 ">
        <Tabs
          tabs={Communitiestabs}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>

      <div className="mt-6">
        {currentTab === "member" && <CommunityMemberMainTable currentTab={currentTab} />}

        {currentTab === "live-feed-content" && (
          <CommunityFeedPage currentTab={currentTab} />
  
        )}
      </div>
    </div>
  );
}
