"use client";

import React, { useState, useEffect, useRef } from "react";
import { BiDollar } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomLineTooltip from "./CustomLineTooltip";
import { dropdownOptions, lineChartData } from "@/constants/dashboard/graphs";


export default function RevenueGraph() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(dropdownOptions[0]);
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-[1rem] p-[1.5rem] border border-[#e5e7eb] shadow-sm flex flex-col w-full font-sans">
      <div className="flex justify-between items-center mb-[1.5rem] border-b border-[#f3f4f6] pb-[1.25rem]">
        <div className="flex items-center gap-[0.75rem]">
          <div className="w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-[#f4f2fa] text-[#845ef7] flex items-center justify-center">
            <BiDollar size="1.25rem" />
          </div>
          <h2 className="text-lg font-semibold text-[#1f2937]">
            Revenue Graph
          </h2>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-[0.5rem] bg-white border border-[#e2e8f0] rounded-[0.5rem] px-[0.75rem] py-[0.375rem] text-[0.875rem] text-[#1e293b] font-medium hover:bg-gray-50 transition-colors"
          >
            {selected}
            {isOpen ? (
              <FiChevronUp size="1.125rem" />
            ) : (
              <FiChevronDown size="1.125rem" />
            )}
          </button>
          {isOpen && (
            <div className="absolute right-0 top-[calc(100%+0.5rem)] w-[10rem] bg-white border border-[#f0f0f5] rounded-[0.5rem] shadow-lg py-[0.5rem] z-10">
              {dropdownOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`px-[1rem] py-[0.625rem] text-[0.875rem] cursor-pointer transition-colors ${selected === option
                      ? "bg-[#f4f2fa] text-[#1e293b]"
                      : "text-[#64748b] hover:bg-[#f4f2fa] hover:text-[#1e293b]"
                    }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-[20rem] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="dashboard_graph"
        >
          <LineChart
            data={lineChartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: "0.8125rem" }}
              tickMargin={10}
              axisLine={{ stroke: "#9ca3af" }}
              tickLine={{ stroke: "#9ca3af" }}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: "0.8125rem" }}
              tickFormatter={(value) => `$${value}`}
              ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000]}
              axisLine={{ stroke: "#9ca3af" }}
              tickLine={{ stroke: "#9ca3af" }}
            />
            <Tooltip
              content={<CustomLineTooltip />}
              cursor={{ stroke: "#cbd5e1", strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#845ef7"
              strokeWidth={3}
              dot={{ r: 4, fill: "#845ef7", strokeWidth: 2, stroke: "#fff" }}
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
