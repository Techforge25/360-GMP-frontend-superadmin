"use client";

import React, { useState, useEffect, useRef } from "react";
import { TbArrowsRightLeft } from "react-icons/tb";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { barChartData, dropdownOptions } from "@/constants/dashboard/graphs";

export default function SubscriptionGraph() {
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
      <div className="flex justify-between items-start mb-[1.5rem] border-b border-[#f3f4f6] pb-[1.25rem]">
        <div className="flex items-start gap-[0.75rem]">
          <div className="w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-[#f4f2fa] text-[#845ef7] flex items-center justify-center mt-[0.125rem]">
            <TbArrowsRightLeft size="1.25rem" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-[#1f2937]">
              Subscription-Based Users
            </h2>
            <p className="text-[0.75rem] text-[#94a3b8] ">
              Trial to Paid upgrades
            </p>
          </div>
        </div>

        {/* <div className="relative" ref={dropdownRef}>
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
        </div> */}
      </div>

      <div className="h-[20rem] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartData}
            margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
            barSize={45}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: "0.875rem" }}
              tickMargin={12}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#6b7280", fontSize: "0.8125rem" }}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{ fill: "#f8fafc" }} />
            <Bar dataKey="users" fill="#845ef7" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
