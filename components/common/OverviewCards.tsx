import React, { ReactNode } from "react";
import CardShimmer from "../skeleton/CardShimmer";
import { TypeMarketplaceStats } from "@/types";

export interface OverviewCardItem {
  id?: number | string;
  title: string;
  value: number | string;
  subtitle: string;
  subtitletwo: string;
  showDot?: boolean;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

interface Props {
  heading: string;
  description: string;
  cards: OverviewCardItem[] | TypeMarketplaceStats[];
  dropdown?: ReactNode;
  className?: string;
  isPending?: boolean;
}

export default function OverviewCards({
  heading,
  description,
  cards,
  dropdown,
  className,
  isPending
}: Props) {
  return (
    <div className="bg-[#fafafc] font-sans">
      <div>
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
           <div className="max-w-full sm:max-w-[90%] md:max-w-full">
          <h1 className="text-lg sm:text-xl md:text-[1.375rem] font-semibold text-brand-primary tracking-wide leading-tight">
             {heading}
          </h1>

          <p className="mt-1 text-sm sm:text-base text-text-secondary leading-relaxed">
               {description}
          </p>
        </div>
          {dropdown && <div>{dropdown}</div>}
        </div>

        <div className={`grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-2 ${className}`}>
          {isPending ? (
            <CardShimmer />
          ) : (
            <>
              {
                cards?.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-[0.75rem] border border-[#f0f0f5] bg-white p-4 shadow-sm"
                  >
                    <div
                      className={`mb-4 flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-[0.25rem] ${card.iconBg} ${card.iconColor}`}
                    >
                      {card.icon}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[1rem] font-normal font-inter text-[#4E596E]">
                        {card.title}
                      </h3>

                      <p className="mb-1 text-[2rem] leading-none font-semibold text-text-light-black-50 font-open-sans">
                        {card.value} {card.title === "Trial Conversion Rate" ? "%" : ""}
                      </p>
                      <div className="flex items-center gap-2">
                        {card.showDot && (
                          <span className="h-2 w-2 rounded-full bg-text-secondary" />
                        )}

                        <p className="text-sm font-normal text-text-light-gray-50">
                          {card.subtitle}
                        </p>

                        {card.subtitletwo && (
                          <>
                            <span className="h-[0.499rem] w-[0.499rem] rounded-full bg-[#8A38F5]" />

                            <p className="text-sm font-normal text-text-light-gray-50">
                              {card.subtitletwo}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          )}

        </div>
      </div>
    </div>
  );
}