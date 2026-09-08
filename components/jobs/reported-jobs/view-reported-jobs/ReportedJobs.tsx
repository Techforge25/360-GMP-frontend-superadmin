"use client";

import { JOB_REPORT_DATA } from "@/constants/jobs/ViewReportedData";
import Image from "next/image";
import Link from "next/link";
import { FiPaperclip, FiUserCheck } from "react-icons/fi";

export default function JobReports() {
  const jobReports = JOB_REPORT_DATA.jobReports;

  return (
    <div className="w-full border-border-gray-200  p-3 border rounded-[0.75rem] p-[1rem]  bg-[#FFFFFF] mt-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFE8E8]">
            <FiUserCheck size={19} className="text-border-red-dark" />
          </div>

          <h2 className="font-open-sans text-[1.125rem] font-semibold text-text-light font-open-sans">
            User Reports And Comments
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-border-red-dark px-3 text-[0.6875rem] font-semibold text-white">
            {JOB_REPORT_DATA.reportCount}
          </span>

          <span className="font-inter text-[1rem] text-date-time font-normal">
            Users
          </span>
        </div>
      </div>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />

      <div className="space-y-4">
        {jobReports.map((report, index) => (
          <div
            key={`${report.createdAt}-${index}`}
            className="rounded-lg border border-border-gray-200 bg-bg-gray-200 p-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={report.userProfile.logo}
                    alt={report.userProfile.fullName}
                    fill
                    sizes="40px"
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-open-sans text-[1rem] font-bold font-inter capitalize leading-5 text-text-review-Page">
                    {report.userProfile.fullName}
                  </h3>

                  <p className="font-inter text-[0.875rem] font-normal text-text-secondary">
                    {report.userProfile.title}
                  </p>
                </div>
              </div>
              <span className="font-inter text-[0.875rem] font-normal text-text-secondary">
                4 hours ago
              </span>
            </div>
            <p className="mt-4 font-inter text-[0.875rem] font-normal leading-5 text-text-setting-light">
              {report.reason}
            </p>

            <p
              className="
                mt-3
                line-clamp-3
                font-inter
                text-[0.875rem]
                font-normal
                leading-5
                text-text-setting-light
              "
            >
              {report.description}
            </p>

            {report.media.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {report.media.map((media, mediaIndex) => (
                  <a
                    key={mediaIndex}
                    href={media}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-inter text-[0.875rem] text-brand-business-icon-dark hover:underline"
                  >
                    <FiPaperclip size={15} />
                    View Evidence [{mediaIndex + 1}]
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
