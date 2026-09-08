"use client";

import LatestJobsShimmer from "@/components/skeleton/LatestJobsShimmer";
import { keys } from "@/keys";
import { getActiveJobs } from "@/services/job-management";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
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
  const { data: response, isPending } = useQuery({
    queryKey: [keys.lattestActiveJobs],
    queryFn: () => getActiveJobs("all", 3, 1),
  });

  const jobs = response?.data?.docs ?? [];

  return (
    <div className="rounded-lg border border-border-gray-200 bg-white p-3">
      <h2 className="font-open-sans text-[1.375rem] font-semibold leading-5 text-text-light">
        Latest Jobs
      </h2>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />

      <div className="space-y-3">
        {isPending ? (
          <LatestJobsShimmer />
        ) : (
          jobs.map((job: any) => (
            <div
              key={job._id}
              className="relative rounded-lg border border-border-gray-200 p-3"
            >
              <div className="flex gap-2">
                <div className="flex h-[3.287rem] w-[3.287rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#EEF2F7]">
                  <Image
                    src={job?.businessProfile?.logo || "/images/user-icon.webp"}
                    alt={job?.businessProfile?.companyName || ""}
                    width={100}
                    height={100}
                    className="h-[3.287rem] w-[3.287rem] object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="pr-5 font-open-sans text-[1rem] font-semibold leading-[18px] text-text-light">
                    {job?.jobTitle}
                  </h3>

                  <div className="mt-1 flex items-center gap-1 text-xs">
                    <span className="font-inter text-[1rem] font-normal text-brand-primary">
                      {job?.businessProfile?.companyName}
                    </span>

                    <span className="text-[1rem] text-text-secondary">•</span>

                    <span className="font-inter text-[0.875rem] font-normal italic text-border-green">
                      Active
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-3 text-[0.875rem] text-text-secondary">
                    <div className="flex items-center gap-1">
                      <FiMapPin
                        size={13}
                        className="h-[1.007rem] w-[0.833rem] text-text-gray-more"
                      />

                      <span className="font-inter text-[0.875rem] font-normal">
                        {job?.location?.city}, {job?.location?.country}
                      </span>
                    </div>

                    <span className="h-[10px] w-0 border-l border-[#5E6676]" />

                    <div className="flex items-center gap-1">
                      <FiBriefcase
                        size={13}
                        className="h-[1.007rem] w-[0.833rem] text-text-gray-more"
                      />

                      <span className="font-inter text-[0.875rem] font-normal">
                        {job?.employmentType}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href={`/jobs/view-active-job-preview/${job?._id}`}>
                  <FiChevronRight
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-brand-primary"
                  />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onViewAllJobs}
          className="flex cursor-pointer items-center gap-1 font-inter text-[1rem] font-normal text-brand-business-icon-dark"
        >
          View All
          <FiArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
