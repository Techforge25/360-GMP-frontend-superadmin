"use client";

import React from "react";

export default function JobPostReviewShimmer() {
  return (
    <div className="mt-1 rounded-[0.75rem] border border-border-gray-200 bg-white p-[1.25rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-9 w-9 animate-pulse rounded-[0.25rem] bg-gray-200" />

          <div className="h-5 w-[10rem] animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="flex items-center gap-3">
          <div className="h-6 w-10 animate-pulse rounded-full bg-gray-200" />

          <div className="h-4 w-[4.5rem] animate-pulse rounded-md bg-gray-200" />

          <div className="h-9 w-[9rem] animate-pulse rounded-[0.5rem] bg-gray-200" />
        </div>
      </div>

      <div className="my-6 h-px w-full bg-brand-rating-star-border" />

      <div className="w-full rounded-[0.4rem] border border-border-gray-200 bg-brand-setting-tab p-[1rem]">
        <div className="flex items-center gap-3">
          <div className="h-[3.875rem] w-[3.875rem] shrink-0 animate-pulse rounded-[0.75rem] bg-gray-200" />

          <div className="flex min-w-0 flex-col gap-2">
            <div className="h-4 w-[13rem] animate-pulse rounded-md bg-gray-200" />

            <div className="flex items-center gap-3">
              <div className="h-4 w-[6rem] animate-pulse rounded-md bg-gray-200" />
              <div className="h-4 w-2 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-[9rem] animate-pulse rounded-md bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[0.45rem] border border-border-gray-200 bg-white">
          <div className="flex items-center justify-between px-3 pb-2 pt-3">
            <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />

            <span className="mx-3 h-[10px] w-px bg-[#E5E7EB]" />

            <div className="h-4 w-[5rem] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="flex items-center justify-between px-3 pb-3 pt-2">
            <div className="h-4 w-[9rem] animate-pulse rounded-md bg-gray-200" />

            <span className="mx-3 h-[10px] w-px bg-[#E5E7EB]" />

            <div className="h-4 w-[6rem] animate-pulse rounded-md bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="h-5 w-[5rem] animate-pulse rounded-md bg-gray-200" />

        <div className="mt-2 h-4 w-[12rem] animate-pulse rounded-md bg-gray-200" />
      </div>

      <div className="pt-4">
        <div className="h-5 w-[7rem] animate-pulse rounded-md bg-gray-200" />

        <div className="mt-3 space-y-3">
          <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-[95%] animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-[88%] animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-[92%] animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-[70%] animate-pulse rounded-md bg-gray-200" />
        </div>
        <div className="mt-5 space-y-3">
          <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-[90%] animate-pulse rounded-md bg-gray-200" />
          <div className="h-4 w-[65%] animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
