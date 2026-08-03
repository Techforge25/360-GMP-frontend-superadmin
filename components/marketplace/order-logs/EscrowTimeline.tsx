import { LuClock3 } from "react-icons/lu";

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
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-white-light text-bg-time-brand">
          <LuClock3 size={20} />
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Escrow Timeline
        </h3>
      </div>

      <div className="border-t border-gray-100 pt-6">
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
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  {item.date}
                  <span className="mx-1 lowercase">•</span>
                  {item.time}
                </p>

                <h4 className="mt-1 text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>

                <p
                  className={`mt-0.5 text-sm ${
                    item.active ? "text-gray-500" : "text-gray-400"
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