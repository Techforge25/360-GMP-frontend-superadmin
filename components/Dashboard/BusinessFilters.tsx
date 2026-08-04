"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const statusOptions = ["Status", "Approve", "Reject", "Pending"];
const dateFilterOptions = ["Last 7 Days", "Last 6 Month", "Last 1 Year"];

export default function BusinessFilters() {
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Last 7 Days");

  const statusRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target as Node)
      ) {
        setStatusOpen(false);
      }

      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setDateOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-[0.75rem] self-end sm:self-auto">
      <span className="text-[0.875rem] text-[#64748b] font-medium">
        Sort By
      </span>


      <div className="relative" ref={statusRef}>
        <button
          onClick={() => {
            setStatusOpen(!statusOpen);
            setDateOpen(false);
          }}
          className="flex items-center justify-between gap-[1.5rem] min-w-[7.5rem] bg-white border border-[#e2e8f0] rounded-[0.5rem] px-[0.875rem] py-[0.4375rem] text-[0.875rem] text-[#1e293b] font-medium hover:bg-gray-50 transition-colors"
        >
          <span>{selectedStatus}</span>

          {statusOpen ? (
            <FiChevronUp size="1.125rem" />
          ) : (
            <FiChevronDown size="1.125rem" />
          )}
        </button>

        {statusOpen && (
          <div className="absolute right-0 top-[calc(100%+0.375rem)] w-[9rem] bg-white border border-[#f0f0f5] rounded-[0.5rem] shadow-lg py-[0.375rem] z-20">
            {statusOptions
              .filter((opt) => opt !== "Status")
              .map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedStatus(option);
                    setStatusOpen(false);
                  }}
                  className={`px-[1rem] py-[0.5rem] text-[0.875rem] cursor-pointer transition-colors ${
                    selectedStatus === option
                      ? "bg-[#f4f2fa] text-[#1e293b] font-medium"
                      : "text-[#475569] hover:bg-[#f4f2fa] hover:text-[#1e293b]"
                  }`}
                >
                  {option}
                </div>
              ))}
          </div>
        )}
      </div>

     
      <div className="relative" ref={dateRef}>
        <button
          onClick={() => {
            setDateOpen(!dateOpen);
            setStatusOpen(false);
          }}
          className="flex items-center justify-between gap-[1.5rem] min-w-[8.5rem] bg-white border border-[#e2e8f0] rounded-[0.5rem] px-[0.875rem] py-[0.4375rem] text-[0.875rem] text-[#1e293b] font-medium hover:bg-gray-50 transition-colors"
        >
          <span>{selectedDate}</span>

          {dateOpen ? (
            <FiChevronUp size="1.125rem" />
          ) : (
            <FiChevronDown size="1.125rem" />
          )}
        </button>

        {dateOpen && (
          <div className="absolute right-0 top-[calc(100%+0.375rem)] w-[10rem] bg-white border border-[#f0f0f5] rounded-[0.5rem] shadow-lg py-[0.375rem] z-20">
            {dateFilterOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedDate(option);
                  setDateOpen(false);
                }}
                className={`px-[1rem] py-[0.5rem] text-[0.875rem] cursor-pointer transition-colors ${
                  selectedDate === option
                    ? "bg-[#f4f2fa] text-[#1e293b] font-medium"
                    : "text-[#475569] hover:bg-[#f4f2fa] hover:text-[#1e293b]"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
