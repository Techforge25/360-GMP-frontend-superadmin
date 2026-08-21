import { CalendarIcon, LocationIcon } from "@/constants/communities/CommunitiesIcon";
import { FeedItem } from "@/types";

export function EventContent({
  event,
}: {
  event: NonNullable<FeedItem["event"]>;
}) {
  const eventDate = new Date(event.date);

  return (
    <div className="px-3 pb-4">
      <div className="overflow-hidden rounded-xl border border-[#e2e5ea] bg-[#fafbfc]">

        <div className="bg-gradient-to-r from-[#401080] to-[#6b21a8] px-4 py-5 text-white">
          <div className="mb-2 flex items-center gap-2">
            <CalendarIcon />

            <span className="text-[11px] font-medium uppercase tracking-wide text-white/80">
              Community Event
            </span>
          </div>

          <h2 className="text-[18px] font-semibold">
            {event.name}
          </h2>
        </div>

  
        <div className="space-y-3 p-4">
          <p className="text-[0.875rem] font-normal font-inter text-text-secondary">
            {event.description}
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
         
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0eafa] text-[#401080]">
                <CalendarIcon />
              </span>

              <div>
                <p className="text-[0.75rem] text-[#8a92a0]">Date</p>
                <p className="text-[11px] font-medium text-[#3d4450]">
                  {eventDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

         
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0eafa] text-[#401080]">
                <LocationIcon />
              </span>

              <div>
                <p className="text-[0.75rem] text-[#8a92a0]">Location</p>
                <p className="text-[11px] font-medium capitalize text-[#3d4450]">
                  {event.location}
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}