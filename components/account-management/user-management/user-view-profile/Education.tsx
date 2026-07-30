import React from "react";
import { LuGraduationCap, LuClipboardCheck } from "react-icons/lu";

export default function Education() {
  return (
    <div className="flex flex-col md:flex-row w-full mt-4 border border-[#e3e4e6] rounded-[0.5rem] bg-white font-sans overflow-hidden p-4 gap-3">
      <div className="flex-1 p-[1.5rem] border border-[#E3E7EE] rounded-[0.75rem]">
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-[#f0eef6]">
            <LuGraduationCap className="w-[1.25rem] h-[1.25rem] text-[#3b1e77]" />
          </div>
          <h2 className="text-[1.125rem] font-semibold text-gray-900">
            Education
          </h2>
        </div>

        <hr className="border-t border-gray-100 mb-[1.5rem]" />

        <div className="relative bg-[#f0f2f6] rounded-[0.5rem] p-[1rem] pl-[0.6rem] border border-[#E3E7EE] border-l-[0.25rem] border-l-[#3b1e77] overflow-hidden">
          <h3 className="text-[0.9375rem] font-bold text-gray-900 mb-[0.375rem]">
            M.S In Human-Computer Interaction (HCI)
          </h3>
          <p className="text-[0.875rem] text-slate-600 mb-[0.25rem]">
            Carnegie Mellon University
          </p>
          <p className="text-[0.8125rem] font-medium text-[#4b2875]">
            2015 – 2017
          </p>
        </div>
      </div>

      <div className="flex-1 p-[1.5rem] border border-[#E3E7EE] rounded-[0.75rem]">
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-[#f0eef6]">
            <LuClipboardCheck className="w-[1.25rem] h-[1.25rem] text-[#3b1e77]" />
          </div>
          <h2 className="text-[1.125rem] font-semibold text-gray-900">
            Jobs Preferences
          </h2>
        </div>

        <hr className="border-t border-gray-100 mb-[1.5rem]" />

        <div className="flex flex-col gap-[1.25rem]">
          <div>
            <h3 className="text-[0.9375rem] font-bold text-gray-900 mb-[0.375rem]">
              Title
            </h3>
            <p className="text-[0.875rem] text-slate-600">
              Supply Chain Analyst
            </p>
          </div>

          <div>
            <h3 className="text-[0.9375rem] font-bold text-gray-900 mb-[0.625rem]">
              Employment Type
            </h3>
            <div className="flex items-center gap-[0.75rem]">
              <span className="px-[1rem] py-[0.375rem] bg-[#efeaf5] text-[#3b1e77] text-[0.8125rem] font-semibold rounded-[1rem]">
                Full Time
              </span>
              <span className="px-[1rem] py-[0.375rem] bg-[#efeaf5] text-[#3b1e77] text-[0.8125rem] font-semibold rounded-[1rem]">
                Contract
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
