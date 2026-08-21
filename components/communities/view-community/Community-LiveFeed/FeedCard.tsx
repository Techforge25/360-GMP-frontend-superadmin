import { FeedItem } from "@/types";
import { FeedHeader } from "./FeedHeader";
import { PostContent } from "./PostContent";
import { PollContent } from "./PollContent";
import { EventContent } from "./EventContent";

export function FeedCard({ item }: { item: FeedItem }) {
  return (
    <article className="overflow-hidden rounded-[10px] border border-[#e1e5ea] bg-white">
      <FeedHeader item={item} />

      {item.type === "post" && <PostContent item={item} />}

      {item.type === "poll" && item.poll && <PollContent poll={item.poll} />}

      {item.type === "event" && item.event && (
        <EventContent event={item.event} />
      )}
    </article>
  );
}
