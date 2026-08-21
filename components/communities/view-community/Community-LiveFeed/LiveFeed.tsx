"use client";

import { feedData } from "@/constants/communities/CommunitiesFeedContent";
import { useState } from "react";
import { FeedCard } from "./FeedCard";
import CustomDateDropdown from "@/components/common/CustomDateDropdown";
import { CommunitydropdownOptions } from "@/constants/communities/Dropdown";

export default function LiveFeed() {
  const [filter, setFilter] = useState("all");

  const filteredPosts = feedData.filter((item) => {
    if (filter === "all") {
      return true;
    }
    const createdAt = new Date(item.createdAt).getTime();
    const now = Date.now();
    const timeDifference = now - createdAt;
    if (filter === "24h") {
      return timeDifference <= 24 * 60 * 60 * 1000;
    }
    if (filter === "3d") {
      return timeDifference <= 3 * 24 * 60 * 60 * 1000;
    }
    if (filter === "7d") {
      return timeDifference <= 7 * 24 * 60 * 60 * 1000;
    }
    return true;
  });

  return (
    <div className="w-full rounded-xl border border-border-gray-200 bg-white overflow-hidden">
      <div className="flex h-[68px] items-center border-b border-border-gray-200 px-5">
        <div className="ml-auto relative">
          <CustomDateDropdown
            value={filter}
            onChange={setFilter}
            options={CommunitydropdownOptions}
          />
        </div>
      </div>

      <div className="bg-white px-3 py-6 md:px-5">
        <div className="space-y-3">
          {filteredPosts.map((item) => (
            <FeedCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
