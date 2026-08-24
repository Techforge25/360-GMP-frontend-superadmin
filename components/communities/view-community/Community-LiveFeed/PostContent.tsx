import { PostMedia } from "./PostMedia";
import { FeedItem } from "@/types";

export function PostContent({ item }: { item: FeedItem }) {
  const hasImages = item.images && item.images.length > 0;

  return (
    <div className="px-3 pb-3">
      {item.content && (
        <div className="mb-3">
          <p className="whitespace-pre-wrap break-words text-[0.875rem] font-inter font-normal leading-[1.55] text-text-setting-light">
            {item.content}
          </p>
        </div>
      )}

      {hasImages && <PostMedia images={item.images} />}

    
    </div>
  );
}