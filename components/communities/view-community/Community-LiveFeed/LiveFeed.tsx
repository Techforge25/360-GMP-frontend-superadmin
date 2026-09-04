"use client";

import { feedData } from "@/constants/communities/CommunitiesFeedContent";
import { useState } from "react";
import { FeedCard } from "./FeedCard";
import CustomDateDropdown from "@/components/common/CustomDateDropdown";
import { CommunitydropdownOptions } from "@/constants/communities/Dropdown";
import { keys } from "@/keys";
import { getCommunityPosts } from "@/services/communities";
import { useQuery } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import { useNavigationStore } from "@/store/modulesStore";
import { FeedItem } from "@/types";
import { MediaShimmer } from "@/components/skeleton/MediaShimmer";
import PaginationComponent from "@/components/common/PaginationComponent";

export type Props = {
  communityId: ParamValue;
};

export default function LiveFeed({ communityId }: Props) {
  const [dateRange, setDateRange] = useState("all");

  const page = useNavigationStore((state) => state.page);
  const setPage = useNavigationStore((state) => state.setPage);

  const { data, isPending } = useQuery({
    queryKey: [keys.communityFeed, communityId, dateRange, page],
    queryFn: () => getCommunityPosts(communityId, dateRange, page),
  });

  const feedData = data?.data?.docs || [];

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="w-full rounded-xl border border-border-gray-200 bg-white overflow-hidden">
      <div className="flex h-[68px] items-center border-b border-border-gray-200 px-5">
        <div className="ml-auto relative">
          <CustomDateDropdown
            value={dateRange}
            onChange={setDateRange}
            options={CommunitydropdownOptions}
          />
        </div>
      </div>

      <div className="bg-white px-3 py-6 md:px-5 pb-[3.375rem]">
        <div className="space-y-3">
          {isPending ? (
            <MediaShimmer />
          ) : feedData?.length > 0 ? (
            feedData.map((item: FeedItem) => (
              <FeedCard key={item._id} item={item} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <p className="text-sm font-medium text-gray-500">No data found</p>
              <p className="mt-1 text-sm text-gray-400">
                There are no feeds available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>

      {data?.data?.totalPages > 1 && (
        <PaginationComponent
          currentPage={page}
          handlePageChange={handlePageChange}
          totalPages={data?.data?.totalPages}
          totalItems={data?.data?.totalDocs}
          totalItemsPerPage={data?.data?.totalItemsPerPage}
        />
      )}
    </div>
  );
}
