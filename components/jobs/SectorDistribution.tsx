"use client";

import { sectorData } from "@/constants/jobs/SectorData";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
export default function SectorDistribution() {
  return (
    <div className="w-full rounded-[0.625rem] border border-border-gray-200 bg-white p-3 sm:p-4">
      <div>
        <h2 className="text-[1.375rem] font-semibold leading-5 text-text-light font-open-sans">
          Sector Distribution
        </h2>

        <p className="mt-3 text-[1rem] font-normal leading-4 text-text-gray-20 font-inter">
          Hiring activity breakdown by industry
        </p>
      </div>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />

      <div className="flex min-h-[18rem] w-full flex-col items-center justify-between gap-5 pl-9 sm:flex-row sm:gap-6">
        <div className="h-[18rem] w-full max-w-[18rem] sm:h-[280px] sm:w-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sectorData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={0}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                isAnimationActive={false}
              >
                {sectorData.map((item) => (
                  <Cell key={item.id} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex w-full max-w-[18.308rem] flex-col gap-3">
          {sectorData.map((item) => (
            <div
              key={item.id}
              className="flex h-[3rem] w-full items-center justify-between rounded-[0.5rem] border border-border-gray-200 bg-white p-[0.75rem]"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-[1rem] w-[1rem] shrink-0 rounded-[4px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="font-inter text-[1rem] font-normal text-text-review-Page">
                  {item.name}
                </span>
              </div>

              <span className="font-inter text-[1rem] font-normal text-text-light-gray-50">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
