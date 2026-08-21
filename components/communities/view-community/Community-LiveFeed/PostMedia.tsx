import { ChevronLeft, ChevronRight } from "@/constants/communities/CommunitiesIcon";
import { useState } from "react";

export function PostMedia({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMedia = images[currentIndex];

  const isVideo =
    currentMedia.toLowerCase().includes(".mp4") ||
    currentMedia.toLowerCase().includes(".webm") ||
    currentMedia.toLowerCase().includes(".mov");

  return (
    <div className="relative overflow-hidden rounded-[3px] bg-[#08111a]">
      <div className="relative aspect-[16/7] w-full">
        {isVideo ? (
          <video
            src={currentMedia}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={currentMedia}
            alt="Post media"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? images.length - 1 : currentIndex - 1
              )
            }
            className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/20 text-white backdrop-blur-sm"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={() =>
              setCurrentIndex(
                currentIndex === images.length - 1 ? 0 : currentIndex + 1
              )
            }
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/20 text-white backdrop-blur-sm"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}