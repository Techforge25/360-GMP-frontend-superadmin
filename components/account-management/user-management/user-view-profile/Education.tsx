"use client";
import educationIcon from "@/assets/educationIcon.svg";
import jobPreferenceIcon from "@/assets/jobPreferenceIcon.svg";
import Image from "next/image";
import { TypeEducation } from "@/types";
import moment from "moment";
import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

interface Props {
  education: TypeEducation;
  title: string;
  employmentType: string[];
  targetJob: string;
  resumeUrl: string;
}

export default function Education({
  education,
  title,
  employmentType,
  targetJob,
  resumeUrl,
}: Props) {
  const [showMore, setShowMore] = useState(false);
  const hasResume = Boolean(resumeUrl);
  const description = education?.description || "";
  const maxLength = 100;

  console.log(education, 'education in cs')
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full mt-[1.5rem] border border-border-gray-light rounded-[0.75rem] bg-surface-DEFAULT font-sans overflow-hidden p-4 gap-3">
      <div className="flex-1 p-[1.25re] border border-border-gray-dark rounded-[0.75rem]">
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-[0.375rem] bg-bg-light-icon">
            <Image
              src={educationIcon}
              width={100}
              height={100}
              alt=""
              className="w-[0.938rem] h-[1.042rem]"
            />
          </div>
          <h2 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
            Education
          </h2>
        </div>

        <hr className="border-t border-bg-light-icon mb-[1.5rem]" />

        <div className="relative bg-white rounded-[0.75rem] p-[1rem] border border-bg-light-icon overflow-hidden">
          <h3 className="text-[1rem] font-medium text-text-primary mb-[0.375rem] font-inter">
            {education?.degree} in {education?.fieldOfStudy}
          </h3>
          <p className="text-[1rem] text-text-secondary mb-[0.25rem] font-inter font-normal">
            {education?.institution}
          </p>
          <p className="text-[0.875rem] font-normal text-brand-primary font-inter">
            {moment(education?.startDate).format("YYYY")} –{" "}
            {education?.endDate
              ? moment(education?.endDate).format("YYYY")
              : "Current"}
          </p>
          {/* <p className="text-[1rem] text-text-secondary mb-[0.25rem] font-inter font-normal">
            DEGREE: {education?.degree}
          </p>
          <p className="text-[1rem] text-text-secondary mb-[0.25rem] font-inter font-normal">
            GRADE: {education?.grade}
          </p> */}
          <p className="text-[1rem] text-text-secondary mb-[0.25rem] font-inter font-normal w-[20rem]  xl:w-[40rem] break-words whitespace-normal">
            {showMore || description.length <= maxLength
              ? description
              : `${description.slice(0, maxLength)}...`}
            {description.length > maxLength && (
              <span
                onClick={() => setShowMore(!showMore)}
                className="ml-2 text-sm cursor-pointer font-semibold text-blue-600 hover:text-blue-700"
              >
                {showMore ? "Show less" : "Show more"}
              </span>
            )}
          </p>

        </div>
      </div>

      <div className="flex-1 p-[1rem] border border-border-gray-dark rounded-[0.75rem]">
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-[0.375rem] bg-bg-light-icon">
            <Image
              src={jobPreferenceIcon}
              width={100}
              height={100}
              alt=""
              className="w-[0.938rem] h-[1.042rem]"
            />
          </div>
          <h2 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
            Jobs Preferences
          </h2>
        </div>

        <hr className="border-t border-bg-light-icon mb-[1.5rem]" />

        <div className="flex flex-col gap-[1.25rem]">
          <div>
            <h3 className="text-[1rem] font-medium text-text-primary mb-[0.375rem] font-inter">
              Title
            </h3>
            <p className="text-[1rem] text-text-secondary font-inter font-normal">
              {targetJob}
            </p>
          </div>
          {/* <div>
            <h3 className="text-[1rem] font-medium text-text-primary mb-[0.625rem] font-inter ">
              Target Jobs
            </h3>
            <div className="flex items-center gap-[0.75rem]">
              <span className="px-[1rem] py-[0.375rem] bg-bg-light-icon text-brand-primary text-[0.813rem] font-medium rounded-[3.125rem] font-inter">
                {targetJob}
              </span>
            </div>
          </div> */}
          <div>
            <h3 className="text-[1rem] font-medium text-text-primary mb-[0.625rem] font-inter ">
              Employment Type
            </h3>
            <div className="grid grid-cols-4 xl:grid-cols-3 gap-[0.75rem]">
              {employmentType?.map((type, index) => {
                return (
                  <span
                    key={index}
                    className="px-[1rem] py-[0.375rem] bg-bg-light-icon text-brand-primary text-[0.813rem] font-medium rounded-[3.125rem] font-inter  text-center"
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {hasResume && (
        <div className="flex-1 p-[1rem] border border-border-gray-dark rounded-[0.75rem]">
          <div className="flex items-center gap-[1rem] mb-[1rem]">
            <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-[0.375rem] bg-bg-light-icon">
              <FiFileText className="w-[0.938rem] h-[1.042rem] text-brand-primary" />
            </div>
            <h2 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
              Resume
            </h2>
          </div>

          <div className="flex items-center justify-between rounded-[0.5rem] border border-gray-200 bg-white px-[0.75rem] py-[0.75rem]">
            <div className="flex min-w-0 items-center gap-[0.75rem]">
              <div className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-[0.375rem] bg-gray-100">
                <FiFileText className="h-[1.25rem] w-[1.25rem] text-brand-primary" />
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[0.875rem] font-medium font-inter text-text-light">
                  Resume
                </span>

                <span className="text-[0.875rem] font-normal font-inter text-text-secondary">
                  Available
                </span>
              </div>
            </div>

            <a
              href={`https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(
                resumeUrl,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume"
              className="flex h-[2rem] w-[2rem] shrink-0 items-center justify-center rounded-full transition-colors "
            >
              <AiOutlineEye className="h-[1.25rem] w-[1.25rem] text-brand-primary cursor-pointer" />
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
