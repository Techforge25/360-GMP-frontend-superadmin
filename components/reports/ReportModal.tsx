"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";
import { ReportModalProps, ReportModalRef } from "@/types";
import { REPORT_CONTENT_MAP, reportEvidence } from "@/constants/reports/ReportModal";

const ReportModal = forwardRef<ReportModalRef, ReportModalProps>(
  ({ reportType }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    if (!open) return null;

    const currentData = REPORT_CONTENT_MAP[reportType];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6 font-sans">
        <div className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh]">
          <div className="relative border-b border-gray-100 px-8 py-6">
            <button
              className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-2xl font-medium text-gray-900">
              {currentData.headerTitle}
            </h2>
            <p className="mt-1 text-[0.875rem] text-gray-500">
              {currentData.headerSubtitle}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 sm:px-8 space-y-5 custom-scrollbar">
            <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-gray-800">
                Reporter Information
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Alex Morgan"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Alex Morgan</h4>
                  <p className="text-[1rem] text-gray-500">
                    alexmorgan@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-gray-800">
                {currentData.sectionTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {currentData.details.map((item, index) => (
                  <div key={index}>
                    <p className="mb-1 text-[1rem] text-gray-500">
                      {item.label}
                    </p>
                    <p className="font-medium text-[1rem] text-gray-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="mb-4 text-[1rem] font-bold uppercase tracking-wide text-gray-800">
                Violation Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-5">
                <div>
                  <p className="mb-1 text-[1rem] text-gray-500">
                    {currentData.violation.reasonLabel}
                  </p>
                  <p className="font-medium text-[1rem] text-gray-900">
                    {currentData.violation.reasonValue}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[1rem] text-gray-500">
                    Reported Date:
                  </p>
                  <p className="font-medium text-[1rem] text-gray-900">
                    {currentData.violation.date}
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F7F8FA] p-4">
                <p className="mb-1 text-[1rem] text-gray-500">
                  User Description:
                </p>
                <p className="text-[0.8rem] leading-relaxed text-gray-800">
                  {currentData.violation.description}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide text-gray-800">
                Attached Evidence & Proof
              </h3>
              <div className="space-y-3">
                {reportEvidence.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-100">
                        <HiOutlineDocumentText className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.fileName}
                        </h4>
                        <p className="text-[1rem] text-gray-500">
                          {item.fileType} • {item.fileSize}
                        </p>
                      </div>
                    </div>
                    <button className="mr-2 cursor-pointer text-gray-400 transition-colors hover:text-gray-700">
                      <FiEye className="h-6 w-6" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ReportModal.displayName = "ReportModal";

export default ReportModal;
