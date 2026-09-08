"use client";
import { ROLE_SUMMARY } from "@/constants/jobs/roleSummary";
import React from "react";
import {
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiEye,
  FiMapPin,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import DOMPurify from "dompurify";
interface JobPostReviewProps {
  contact: boolean;
}

function JobPostReview({ contact }: JobPostReviewProps) {
  return (
    <div className="border-border-gray-200 border rounded-[0.75rem] p-[1.25rem]  bg-[#FFFFFF] mt-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-bg-pink-20 px-2 py-2 rounded-[0.25rem]">
            <FiEye size={16} className="text-brand-primary" />
          </div>
          <h1 className="capitalize text-text-primary text-[1.125rem] font-semibold font-open-sans">
            jobs post review
          </h1>
        </div>
        <div className="flex shrink-0 flex-nowrap items-center gap-3">
          <span className="shrink-0 rounded-[3.125rem] bg-brand-btn-pills px-4 py-1 text-[0.75rem] font-medium font-inter text-white">
            12
          </span>

          <span className="shrink-0 whitespace-nowrap text-[1rem] font-normal font-inter text-text-setting-light">
            Applicants
          </span>
          {contact && (
            <button className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[0.5rem] bg-brand-primary px-3 py-1.5 text-white font-normal text-[1rem] font-inter">
              Contact Business
              <MdMailOutline size={16} className="shrink-0" />
            </button>
          )}
        </div>
      </div>
      <div className="my-6 h-px w-full bg-brand-rating-star-border" />
      <div className="w-full rounded-[0.4rem] bg-brand-setting-tab border border-border-gray-200 p-[1rem]">
        <div className="flex items-center gap-3">
          <div className="flex h-[3.875rem] w-[3.875rem] shrink-0 items-center justify-center rounded-[0.75rem] border border-border-shadow-50 bg-white">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md border-[3px] border-[#F59E0B] text-[#2563EB]">
              <HiOutlineOfficeBuilding size={22} />
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-[1rem] font-semibold leading-5 font-inter text-text-light">
              Global Manufacturing Co.
            </h3>

            <div className="mt-1 flex items-center gap-2 text-[1rem] font-normal font-inter text-text-secondary">
              <div className="flex items-center gap-2">
                <HiOutlineOfficeBuilding
                  size={16}
                  className="text-text-secondary"
                />
                <span>Manufacturing</span>
              </div>

              <span className="text-text-gray-more text-xl">•</span>

              <div className="flex items-center gap-2">
                <FiMapPin size={16} className="text-text-secondary" />
                <span>New York USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[0.45rem] border border-border-gray-200 bg-white">
          <div className="flex pt-3 pb-2 items-center justify-between px-3">
            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <FiMapPin size={15} className="text-text-secondary" />
              <span>New York USA</span>
            </div>

            <span className="mx-3 h-[10px] w-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <FiBriefcase size={15} className="text-text-secondary " />
              <span>Full Time</span>
            </div>
          </div>

          <div className="flex pt-2 pb-3 items-center justify-between px-3">
            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <FiDollarSign size={15} className="text-text-secondary" />
              <span>1000-1500/Month</span>
            </div>

            <span className="mx-3 h-[10px] w-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <LuAlarmClock size={15} className="text-text-secondary" />
              <span>2 Days Ago</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-text-gray-10 text-[1.125rem] font-semibold font-inter pt-4">
          Job Title
        </h1>
        <p className="text-text-setting-light text-[0.875rem] font-inter font-normal pt-1">
          Social Media Marketer
        </p>
        <h1 className="text-text-gray-10 text-[1.125rem] font-semibold font-inter pt-4">
          Role Summary
        </h1>

        <div
          className="
    text-text-setting-light
    text-[0.875rem]
    font-inter
    font-normal
    leading-6

    [&_p]:mb-5
    [&_p]:text-[0.875rem]
    [&_p]:pt-2

    [&_h2]:text-[1.125rem]
    [&_h2]:font-semibold
    [&_h2]:text-setting-light
    [&_h2]:mb-2

    [&_ul]:list-disc
    [&_ul]:pl-5
    [&_ul]:mb-5

    [&_li]:text-[0.875rem]
    [&_li]:mb-2
    [&_li]:marker:text-[1.3rem]
  "
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(ROLE_SUMMARY.description),
          }}
        />
      </div>
    </div>
  );
}

export default JobPostReview;
