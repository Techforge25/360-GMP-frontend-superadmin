"use client";
import { useEffect, useRef, useState } from "react";
import { BiDollar } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

import CustomLineTooltip from "./CustomLineTooltip";
import { lineChartData } from "@/constants/dashboard/graphs";
import { keys } from "@/keys";
import { fetchRevenueGraph } from "@/services/dashboard";
import RevenueShimmer from "../skeleton/RevenueShimmer";

export default function RevenueGraph() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { data, isPending } = useQuery({
    queryKey: [keys.revenueGraph],
    queryFn: fetchRevenueGraph,
  });

  console.log(data, 'dataaaaa offff dataaaaa')

  if (isPending) {
    return <RevenueShimmer />;
  }

  return (
    <div className="bg-white rounded-[1rem] p-[1.5rem] border border-[#e5e7eb] shadow-sm flex flex-col w-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-[1.5rem] border-b border-[#f3f4f6] pb-[1.25rem]">
        <div className="flex items-center gap-[0.75rem]">
          <div className="w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-[#f4f2fa] text-[#845ef7] flex items-center justify-center">
            <BiDollar size="1.25rem" />
          </div>

          <h2 className="text-lg font-semibold text-[#1f2937]">
            Revenue Graph
          </h2>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[20rem] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="dashboard_graph"
        >
          <LineChart
            data={data?.data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#6b7280", fontSize: "0.8125rem" }}
              tickMargin={10}
              axisLine={{ stroke: "#9ca3af" }}
              tickLine={{ stroke: "#9ca3af" }}
            />

            <YAxis
              tick={{ fill: "#6b7280", fontSize: "0.8125rem" }}
              tickFormatter={(value) => `$${value}`}
              ticks={[
                0,
                10000,
                20000,
                30000,
                40000,
                50000,
                60000,
                70000,
                80000,
                90000,
                100000,
                110000,
              ]}
              axisLine={{ stroke: "#9ca3af" }}
              tickLine={{ stroke: "#9ca3af" }}
            />

            <Tooltip
              content={<CustomLineTooltip />}
              cursor={{
                stroke: "#cbd5e1",
                strokeWidth: 1,
              }}
            />

            <Line
              type="monotone"
              dataKey="earning"
              stroke="#845ef7"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#845ef7",
                strokeWidth: 2,
                stroke: "#fff",
              }}
              activeDot={{
                r: 6,
                fill: "#845ef7",
                strokeWidth: 2,
                stroke: "#fff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}