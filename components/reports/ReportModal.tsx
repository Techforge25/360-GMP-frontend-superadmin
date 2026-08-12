"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";
import { ReportModalProps, ReportModalRef } from "@/types";
import { keys } from "@/keys";
import {
  viewBusinessReports,
  viewCommunityReports,
  viewJobReports,
  viewProductReports,
} from "@/services/reports";
import { useQuery } from "@tanstack/react-query";
import useReportDetails from "@/hooks/useReportDetails";
import ReportsViewShimmer from "../skeleton/ReportsViewShimmer";
import { previewFile } from "@/helpers";

const ReportModal = forwardRef<ReportModalRef, ReportModalProps>(
  ({ isOpen, reportType, ReportId, reportModal, onClose }, ref) => {
    const { data: dataJob, isPending: isPendingJob } = useQuery({
      queryKey: [keys.viewReportJob, ReportId, reportModal === "Job"],
      queryFn: () => viewJobReports(ReportId),
      staleTime: 0,
      enabled: !!ReportId && reportModal === "Job",
    });

    const { data: dataBusiness, isPending: isPendingBusiness } = useQuery({
      queryKey: [keys.viewReportBusiness, ReportId, reportModal === "Business"],
      queryFn: () => viewBusinessReports(ReportId),
      staleTime: 0,
      enabled: !!ReportId && reportModal === "Business",
    });

    const { data: dataProduct, isPending: isPendingProduct } = useQuery({
      queryKey: [keys.viewReportProduct, ReportId, reportModal === "Product"],
      queryFn: () => viewProductReports(ReportId),
      staleTime: 0,
      enabled: !!ReportId && reportModal === "Product",
    });

    const { data: dataCommunity, isPending: isPendingCommunity } = useQuery({
      queryKey: [
        keys.viewReportCommunity,
        ReportId,
        reportModal === "Community",
      ],
      queryFn: () => viewCommunityReports(ReportId),
      staleTime: 0,
      enabled: !!ReportId && reportModal === "Community",
    });

    const displayData =
      reportType === "job"
        ? dataJob?.data
        : reportType === "business"
          ? dataBusiness?.data
          : reportType === "product"
            ? dataProduct?.data
            : reportType === "community"
              ? dataCommunity?.data
              : null;
    const pendingData =
      reportType === "job"
        ? isPendingJob
        : reportType === "business"
          ? isPendingBusiness
          : reportType === "product"
            ? isPendingProduct
            : reportType === "community"
              ? isPendingCommunity
              : null;

    const reportDetails = useReportDetails(displayData);

    if (!isOpen) return null;
    const currentData = reportDetails[reportType];

    return (
      <>
        {pendingData ? (
          <ReportsViewShimmer />
        ) : (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6 font-sans">
              <div className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh]">
                <div className="relative border-b border-gray-100 px-8 py-6 pb-3 pt-5">
                  <button
                    className="absolute right-6 top-6 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <IoClose size={24} />
                  </button>
                  <h2 className="text-[1.375rem] font-medium text-text-light font-inter break-words whitespace-normal">
                    {currentData.headerTitle}
                  </h2>
                  {/* <p className="mt-1 text-[0.875rem] text-text-setting-dark font-normal font-inter break-words whitespace-normal">
                    {currentData.headerSubtitle}
                  </p> */}
                </div>

                <div className="flex-1 overflow-y-auto p-6 sm:px-8 space-y-5 custom-scrollbar">
                  <div className="rounded-lg border border-border-gray-200 p-5 shadow-sm">
                    <h3 className="mb-4 text-[1rem] font-semibold font-inter  uppercase tracking-wide text-text-setting-dark">
                      Reporter Information
                    </h3>
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          displayData?.reportedBy?.logo ||
                          "/images/user-icon.webp"
                        }
                        alt="Alex Morgan"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-[1rem] font-medium font-inter text-text-setting-dark break-words whitespace-normal">
                          {displayData?.reportedBy?.fullName}
                        </h4>
                        <p className="text-[1rem] text-text-light-gray-50 font-inter break-words whitespace-normal">
                          {displayData?.reportedBy?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border-gray-200 p-5 shadow-sm">
                    <h3 className="mb-4 text-[1rem] font-semibold font-inter uppercase tracking-wide text-text-setting-dark">
                      {currentData.sectionTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                      {currentData.details.map((item, index) => (
                        <div key={index}>
                          <p className="mb-1 text-[1rem] font-inter font-normal text-text-light-gray-50 break-words whitespace-normal">
                            {item.label}
                          </p>
                          <p className="font-medium text-[1rem] font-inter font-medium text-text-light break-words whitespace-normal">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-border-gray-200 p-5 shadow-sm">
                    <h3 className="mb-4 text-[1rem] font-semibold font-inter uppercase tracking-wide text-text-light">
                      Violation Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-4 gap-x-4 mb-5">
                      <div>
                        <p className="mb-1 text-[1rem] text-text-light-gray-50 font-inter font-normal">
                          Reported Date:
                        </p>
                        <p className="font-medium text-[1rem] text-text-light font-inter break-words whitespace-normal">
                          {currentData.violation.date}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-[1rem] font-normal text-text-light-gray-50 break-words whitespace-normal">
                          {currentData.violation.reasonLabel}
                        </p>
                        <p className="font-medium text-[1rem] text-text-light font-inter break-words whitespace-normal">
                          {currentData.violation.reasonValue}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#F7F8FA] p-4">
                      <p className="mb-1 text-[1rem] text-text-light-gray-50 font-normal font-inter">
                        User Description:
                      </p>
                      <p className="text-[0.875rem] leading-relaxed text-text-light font-inter font-normal break-words whitespace-normal">
                        {currentData.violation.description}
                      </p>
                    </div>
                  </div>

                  {displayData?.media?.length > 0 && (
                    <div className="rounded-lg border border-border-gray-200 p-5 shadow-sm">
                      <h3 className="mb-4 text-[1rem] font-semibold uppercase tracking-wide font-inter text-text-light">
                        Attached Evidence & Proof
                      </h3>
                      <div className="space-y-3">
                        {displayData?.media?.map(
                          (item: string, index: number) => {
                            const extractFileInput = item.split(".");
                            return (
                              <div
                                key={item}
                                className="flex items-center justify-between rounded-lg border border-border-gray-200 p-3 transition-colors hover:bg-gray-50"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-gray-200 bg-gray- 100">
                                    <HiOutlineDocumentText className="h-6 w-6 text-gray-400" />
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-gray-900">
                                      {index + 1} {extractFileInput[3]}
                                    </h4>
                                  </div>
                                </div>

                                <button
                                  onClick={() => previewFile(item)}
                                  className="mr-2 cursor-pointer text-text-setting-light transition-colors hover:text-gray-700"
                                >
                                  <FiEye className="h-[1.375rem] w-[1.375rem]" />
                                </button>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  },
);

ReportModal.displayName = "ReportModal";

export default ReportModal;
