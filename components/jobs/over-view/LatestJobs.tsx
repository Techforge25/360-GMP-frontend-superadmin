"use client";

import { jobs } from "@/constants/jobs/roleSummary";
import Image from "next/image";
import {
  FiMapPin,
  FiBriefcase,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";

interface Props {
  onViewAllJobs: () => void;
}

export default function LatestJobs({ onViewAllJobs }: Props) {
  return (
    <div className="rounded-lg border border-border-gray-200 bg-white p-3">
      <h2 className="text-[1.375rem] font-semibold leading-5 text-text-light font-open-sans">
        Latest Jobs
      </h2>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />

      <div className="space-y-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="relative rounded-lg border border-border-gray-200 p-3"
          >
            <div className="flex gap-2">
              <div className="flex w-[3.287rem] h-[3.287rem] shrink-0 items-center justify-center rounded-md bg-[#EEF2F7] text-sm font-semibold text-[#6842A5]">
                <Image
                  src="/images/image 55.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[3.287rem] h-[3.287rem]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="pr-5 text-[1rem] font-semibold font-open-sans  leading-[18px] text-text-light">
                  {job.title}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="text-brand-primary text-[1rem] font-normal font-inter">
                    {job.company}
                  </span>

                  <span className="text-text-secondary text-[1rem]">•</span>

                  <span className="text-border-green italic text-[0.875rem] font-normal font-inter">
                    Active
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-3 text-[0.875rem] text-text-secondary">
                  <div className="flex items-center gap-1">
                    <FiMapPin
                      size={13}
                      className="text-text-gray-more w-[0.833rem] h-[1.007rem]"
                    />
                    <span className="text-[0.875rem] font-normal font-inter">
                      New York USA
                    </span>
                  </div>
                  <span className="h-[10px] w-0 border-l border-[#5E6676]" />

                  <div className="flex items-center gap-1">
                    <FiBriefcase
                      size={13}
                      className="text-text-gray-more w-[0.833rem] h-[1.007rem]"
                    />
                    <span className="text-[0.875rem] font-normal font-inter">
                      Full Time
                    </span>
                  </div>
                </div>
              </div>

              <FiChevronRight
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-primary cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onViewAllJobs}
          className="flex items-center gap-1 text-[1rem] cursor-pointer text-brand-business-icon-dark font-normal font-inter"
        >
          View All
          <FiArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
