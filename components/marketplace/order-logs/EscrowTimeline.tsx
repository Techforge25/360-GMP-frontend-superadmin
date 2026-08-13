import { LuClock3 } from "react-icons/lu";
import OrderTimeline from "@/assets/OrderTimeline.svg"
import Image from "next/image";
interface TimelineItem {
  date: string;
  time: string;
  title: string;
  description: string;
  active: boolean;
}

interface Props {
  timeline: TimelineItem[];
}

const EscrowTimeline = ({ timeline }: Props) => {
  return (
    <div className="rounded-[0.5rem] border border-border-gray-200 bg-white p-6 pb-4">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-[1.875rem] w-[2rem] items-center justify-center rounded-lg bg-brand-setting-tab text-bg-time-brand">
        <Image src={OrderTimeline} alt="" width={100} height={100} className="w-[1.146rem] h-[0.833rem]"/>  
        </div>

        <h3 className="text-[1.25rem] font-open-sans  font-semibold text-text-primary">
          Order Timeline
        </h3>
      </div>

      <div className="border-t border-border-gray-200 pt-6">
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;

          return (
            <div
              key={index}
              className={`relative flex gap-5 ${!isLast ? "pb-8" : ""}`}
            >
              {!isLast && (
                <div
                  className={`absolute left-[7px] top-3 h-full w-[2px] bg-gradient-to-b ${
                    item.active
                      ? "from-bg-time-brand to-transparent"
                      : "from-gray-300 to-transparent"
                  }`}
                />
              )}

              <div
                className={`relative z-10 mt-1.5 h-4 w-4 rounded-full ${
                  item.active ? "bg-bg-time-brand" : "bg-gray-400"
                }`}
              />

              <div>
                <p className="text-[0.875rem] font-normal font-inter uppercase tracking-wider text-text-gray-more">
                  {item.date}
                  <span className="mx-1 lowercase text-text-secondary w-[0.438rem] h-[0.438rem]">•</span>
                  {item.time}
                </p>

                <h4 className="mt-1 text-[1.125rem] font-medium font-inter text-text-light">
                  {item.title}
                </h4>

                <p
                  className={`mt-0.5 text-[0.875rem] font-normal font-inter ${
                    item.active ? "text-text-gray-more" : "text-gray-400"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EscrowTimeline;