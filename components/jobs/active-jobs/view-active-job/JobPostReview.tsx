"use client";
import React from "react";
import { FiBriefcase, FiDollarSign, FiEye, FiMapPin } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import DOMPurify from "dompurify";
import Image from "next/image";
import moment from "moment";
interface JobPostReviewProps {
  contact: boolean;
  totalJobApplicants: number;
  companyName: string;
  businessType: string;
  logo: string;
  country: string;
  city: string;
  employmentType: string;
  salaryMin: number;
  salaryMax: number;
  createdAt: string;
  jobTitle: string;
  description: string;
  email: string;
}

function JobPostReview({
  contact,
  totalJobApplicants,
  companyName,
  businessType,
  logo,
  country,
  city,
  employmentType,
  salaryMax,
  salaryMin,
  createdAt,
  jobTitle,
  description,
  email,
}: JobPostReviewProps) {
  return (
    <div className="border-border-gray-200 border rounded-[0.75rem] p-[1.25rem]  bg-[#FFFFFF] mt-1">
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="shrink-0 rounded-[0.25rem] bg-bg-pink-20 px-2 py-2">
            <FiEye size={16} className="text-brand-primary" />
          </div>

          <h1 className="capitalize text-[1.125rem] font-semibold font-open-sans text-text-primary">
            jobs post review
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
          <span className="shrink-0 rounded-[3.125rem] bg-brand-btn-pills px-4 py-1 text-[0.75rem] font-medium font-inter text-white">
            {totalJobApplicants}
          </span>

          <span className="shrink-0 whitespace-nowrap text-[1rem] font-normal font-inter text-text-setting-light">
            Applicants
          </span>

          {contact && (
            <a
              href={`mailto:${email}`}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[0.5rem] bg-brand-primary px-3 py-1.5 font-inter text-[1rem] font-normal text-white"
            >
              Contact Business
              <MdMailOutline size={16} className="shrink-0" />
            </a>
          )}
        </div>
      </div>
      <div className="my-6 h-px w-full bg-brand-rating-star-border" />
      <div className="w-full rounded-[0.4rem] bg-brand-setting-tab border border-border-gray-200 p-[1rem]">
        <div className="flex items-center gap-3">
          <div className="flex h-[3.875rem] w-[3.875rem] shrink-0 items-center justify-center rounded-[0.75rem] border border-border-shadow-50 bg-white">
            <div className="flex h-[3.875rem] w-[3.875rem] items-center justify-center overflow-hidden rounded-[0.75rem] border-[1px] border-border-shadow-50 ">
              <Image
                src={logo}
                alt=""
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-[1rem] font-semibold leading-5 font-inter text-text-light">
              {companyName}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-[1rem] font-normal font-inter text-text-secondary">
              <div className="flex items-center gap-2">
                <HiOutlineOfficeBuilding
                  size={16}
                  className="text-text-secondary"
                />
                <span>{businessType}</span>
              </div>

              <span className="text-text-gray-more text-xl">•</span>

              <div className="flex items-center gap-2">
                <FiMapPin size={16} className="text-text-secondary" />
                <span>
                  {city} {country}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[0.45rem] border border-border-gray-200 bg-white">
          <div className="flex pt-3 pb-2 items-center justify-between px-3">
            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <FiMapPin size={15} className="text-text-secondary" />
              <span>
                {city} {country}
              </span>
            </div>

            <span className="mx-3 h-[10px] w-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <FiBriefcase size={15} className="text-text-secondary " />
              <span>{employmentType}</span>
            </div>
          </div>

          <div className="flex pt-2 pb-3 items-center justify-between px-3">
            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <FiDollarSign size={15} className="text-text-secondary" />
              <span>
                {salaryMin}-{salaryMax}/Month
              </span>
            </div>

            <span className="mx-3 h-[10px] w-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-1.5 text-[0.875rem] font-normal font-inter text-text-secondary">
              <LuAlarmClock size={15} className="text-text-secondary" />
              <span>{moment(createdAt).fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-text-gray-10 text-[1.125rem] font-semibold font-inter pt-4">
          Job Title
        </h1>
        <p className="text-text-setting-light text-[0.875rem] font-inter font-normal pt-1">
          {jobTitle}
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
            __html: DOMPurify.sanitize(description),
          }}
        />
      </div>
    </div>
  );
}

export default JobPostReview;
