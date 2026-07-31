"use client";

import React from "react";
import { TbNetwork } from "react-icons/tb";

export default function OperationalAndTradeProfile() {
  return (
    <div className="mt-8 border border-gray-200 rounded-[0.5rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-[#f5effa] px-[1.5rem] py-[1.25rem] border-b border-gray-200">
        <TbNetwork className="w-[1.25rem] h-[1.25rem] text-[#2c0a59]" />
        <h2 className="text-[1rem] font-semibold text-[#334155]">
          Operational & Trade Profile
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[1.5rem] gap-x-[2.5rem]">
          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Auditing Agency
            </span>
            <span className="text-[0.9375rem] font-medium text-[#1e293b]">
              PwC
            </span>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Trade Affiliations
            </span>
            <div className="flex flex-wrap gap-[0.5rem]">
              <span className="inline-block px-[1.25rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
                Chamber of Commerce
              </span>
              <span className="inline-block px-[1.25rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
                Chamber of Commerce
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <span className="text-[0.875rem] font-semibold text-[#64748b]">
            Region Of Operations
          </span>
          <div>
            <span className="inline-block px-[1.25rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
              North America
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
