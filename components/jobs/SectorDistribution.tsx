"use client";

import { keys } from "@/keys";
import { getJobsgraph } from "@/services/job-management";
import { useQuery } from "@tanstack/react-query";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import SectorDistributionShimmer from "../skeleton/SectorDistributionShimmer";
import { sectorColors } from "@/constants/jobs/sectorColors";

export default function SectorDistribution() {
  const { data: response, isPending } = useQuery({
    queryKey: [keys.jobsGraph],
    queryFn: getJobsgraph,
  });

  if (isPending) {
    return <SectorDistributionShimmer />;
  }

  const sectorData = Object.entries(
    (response?.data) as Record<string, number>,
  ).map(([name, value]) => ({
    name,
    value,
    color: sectorColors[name] ?? "#94A3B8",
  }));

  console.log("sectorData",sectorData)

  return (
    <div className="w-full rounded-[0.625rem] border border-border-gray-200 bg-white p-3 sm:p-4">
      <div>
        <h2 className="font-open-sans text-[1.375rem] font-semibold leading-5 text-text-light">
          Sector Distribution
        </h2>

        <p className="mt-3 font-inter text-[1rem] font-normal leading-4 text-text-gray-20">
          Hiring activity breakdown by industry
        </p>
      </div>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />


      <div className="flex min-h-[18rem] w-full items-center justify-around gap-6 lg:flex-row lg:items-center  2xl:justify-between lg:gap-6 pl-0 xl:pl-5">

        <div className="h-[20rem] w-full max-w-[20rem] sm:h-[22rem] sm:max-w-[22rem] lg:h-[300px] lg:w-[300px] lg:max-w-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sectorData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={82}
outerRadius={122}
                paddingAngle={0}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                isAnimationActive={false}
              >
                {sectorData.map((item) => (
                  <Cell  fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Sectors */}
        <div className="flex w-full max-w-[18.308rem] flex-col gap-3">
          {sectorData.map((item) => (
            <div
              className="flex h-[3rem] w-full items-center justify-between rounded-[0.5rem] border border-border-gray-200 bg-white p-[0.75rem]"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-[1rem] w-[1rem] shrink-0 rounded-[4px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="truncate font-inter text-[1rem] font-normal text-text-review-Page">
                  {item.name}
                </span>
              </div>

              <span className="shrink-0 font-inter text-[1rem] font-normal text-text-light-gray-50">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}