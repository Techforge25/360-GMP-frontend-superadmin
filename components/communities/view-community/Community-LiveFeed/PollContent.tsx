import { ChevronRight } from "@/constants/communities/CommunitiesIcon";
import { formatDate } from "@/helpers";
import { FeedItem } from "@/types";
import { useState } from "react";

export function PollContent({
  poll,
}: {
  poll: NonNullable<FeedItem["poll"]>;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const totalVotes = poll.options.reduce(
    (total, option) => total + option.votes,
    0
  );

  return (
    <div className="px-3 pb-3">
      <h2 className="mb-4 text-[1.125rem] font-semibold leading-5 font-inter text-text-setting-light">
        {poll.question}
      </h2>

      <div className="space-y-2">
        {poll.options.map((option) => {
          const percentage =
            totalVotes > 0
              ? Math.round((option.votes / totalVotes) * 100)
              : 0;

          const isSelected = selected === option._id;

          return (
            <button
              key={option._id}
              type="button"
              onClick={() => setSelected(option._id)}
              className="relative block h-[35px] w-full overflow-hidden rounded-[7px] border border-[#E3E7EE] bg-white text-left"
            >
              {(option.votes > 0 || isSelected) && (
                <div
                  className="absolute inset-y-0 left-0 bg-[#dce9fb] transition-all"
                  style={{
                    width: `${Math.max(percentage, isSelected ? 8 : 0)}%`,
                  }}
                />
              )}
              <div className="relative z-10 flex h-full items-center justify-between px-2.5">
                <span className="flex items-center gap-2 text-[0.875rem] font-medium font-inter text-text-setting-light">
                  <span
                    className={`flex h-3 w-3 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-[#204da7]"
                        : "border-[#727b89]"
                    }`}
                  >
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#204da7]" />
                    )}
                  </span>

                  {option.option}
                </span>

                <span className="flex items-center gap-2 text-[11px] text-[#1748c8]">
                  {percentage}%

                  <ChevronRight />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-3 text-[10px] text-[#8991a0]">
        Poll ends {formatDate(poll.duration)}
      </div>
    </div>
  );
}