"use client";

import React from "react";
import { RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";

interface FileItem {
  title: string;
  filename: string;
  fileUrl: string;
}

export default function AmlAndTransactionProfile() {
  const evidenceFile: FileItem = {
    title: "Evidence Of Funds",
    filename: "Certificate Of Incorporation",
    fileUrl: "#",
  };

  const handleViewFile = (file: FileItem) => {
    alert(`Viewing: ${file.filename}`);
  };

  return (
    <div className="mt-8 border border-gray-200 rounded-[0.5rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-[#f5effa] px-[1.5rem] py-[1.25rem] border-b border-gray-200">
        <RiShieldCheckLine className="w-[1.25rem] h-[1.25rem] text-[#2c0a59]" />
        <h2 className="text-[1rem] font-semibold text-[#334155]">
          AML & Transaction Profile
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[0.375rem]">
          <span className="text-[0.875rem] font-semibold text-[#64748b]">
            Purpose Of Using Platform
          </span>
          <span className="text-[0.9375rem] font-medium text-[#1e293b]">
            ----------------------
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] gap-x-[1.5rem]">
          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Expected Value Range
            </span>
            <span className="text-[0.9375rem] font-medium text-[#1e293b]">
              10K-100K
            </span>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Main Counterparties
            </span>
            <div>
              <span className="inline-block px-[1.25rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
                Local Business
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              PEP (Politically Exposed Person) Status
            </span>
            <div className="flex items-center gap-[0.375rem] text-[#16a34a] font-medium text-[0.9375rem]">
              <span className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full border border-[#16a34a] text-xs">
                ✓
              </span>
              None Detected
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <span className="text-[0.875rem] font-semibold text-[#64748b]">
            Trade Corridors
          </span>
          <div className="flex flex-wrap gap-[0.5rem]">
            <span className="inline-block px-[1.25rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
              UK to EU
            </span>
            <span className="inline-block px-[1.25rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
              UK to USA
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[0.75rem]">
          <span className="text-[0.875rem] font-semibold text-[#475569]">
            Evidence Of Funds
          </span>

          <div className="max-w-[26rem]">
            <div className="flex items-center justify-between p-[0.875rem] border border-gray-200 rounded-[0.5rem] bg-[#fcfcfd] hover:border-gray-300 transition-all">
              <div className="flex items-center gap-[0.75rem]">
                <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-[#ffebee] text-[#d32f2f] rounded-[0.375rem]">
                  <span className="text-[0.75rem] font-bold">PDF</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.875rem] font-semibold text-[#1e293b]">
                    {evidenceFile.filename}
                  </span>
                  <span className="text-[0.75rem] text-[#64748b]">
                    Certificate.PDF2
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleViewFile(evidenceFile)}
                className="p-[0.5rem] text-gray-500 hover:text-[#2c0a59] transition-colors cursor-pointer"
                title="View file"
              >
                <AiOutlineEye className="w-[1.25rem] h-[1.25rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
