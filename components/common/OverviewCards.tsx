import React, { ReactNode } from "react";

export interface OverviewCardItem {
  id: number | string;
  title: string;
  value: string;
  subtitle: string;
  subtitletwo: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

interface Props {
  heading: string;
  description: string;
  cards: OverviewCardItem[];
  dropdown?: ReactNode;
}

export default function OverviewCards({
  heading,
  description,
  cards,
  dropdown,
}: Props) {
  return (
    <div className="bg-[#fafafc] font-sans">
      <div>
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-[1.375rem] font-semibold text-[#1e1042] tracking-tight">
              {heading}
            </h1>
            <p className="mt-0 text-[1rem] font-medium text-[#717b8f]">
              {description}
            </p>
          </div>

          {dropdown && <div>{dropdown}</div>}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-2xl border border-[#f0f0f5] bg-white p-4 shadow-sm"
            >
              <div
                className={`mb-4 flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-[0.625rem] ${card.iconBg} ${card.iconColor}`}
              >
                {card.icon}
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-[1rem] font-medium text-[#647087]">
                  {card.title}
                </h3>

                <p className="mb-1 text-[2rem] leading-none font-semibold text-[#1c1d22]">
                  {card.value}
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8994a5]" />

                  <p className="text-sm font-medium text-[#8994a5]">
                    {card.subtitle}
                  </p>

                  {card.subtitletwo && (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8A38F5]" />

                      <p className="text-sm font-medium text-[#8994a5]">
                        {card.subtitletwo}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
