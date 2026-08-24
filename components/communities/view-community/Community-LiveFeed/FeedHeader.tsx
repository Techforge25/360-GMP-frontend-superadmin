import { formatTimeAgo } from "@/helpers";
import { FeedItem } from "@/types";

export function FeedHeader({ item }: { item: FeedItem }) {
  return (
    <div className="flex items-center gap-3 px-3 py-3 md:px-3">
      <img
        src={item.postedBy.logo}
        alt={item.postedBy.name}
        className="h-10 w-10 shrink-0 rounded-full border border-[#e5e7eb] object-cover"
      />

      <div className="w-full">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-[1rem] font-inter font-bold text-text-review-Page">
            {item.postedBy.name}
          </h3>

          {item.type === "poll" && (
            <span className="rounded-full bg-[#E6F6E9] px-4 py-1 text-[0.813rem] font-medium text-[#0B8806]">
              Question
            </span>
          )}
        </div>

        <div className="mt-[2px] flex items-center gap-2 text-[0.875rem] font-normal font-inter text-text-secondary">
          <span className="text-[0.875rem] font-normal font-inter text-text-secondary">{item.role || "Community Member"}</span>

          <span className="text-text-secondary text-md">•</span>

          <span>{formatTimeAgo(item.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}