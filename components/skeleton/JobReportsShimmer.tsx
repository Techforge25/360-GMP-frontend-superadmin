"use client";

import React from "react";

export default function JobReportsShimmer() {
  return (
    <div className="mt-1 w-full rounded-[0.75rem] border border-border-gray-200 bg-white p-[1rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 animate-pulse rounded-md bg-gray-200" />

          <div className="h-5 w-[12rem] animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-5 w-7 animate-pulse rounded-full bg-gray-200" />

          <div className="h-4 w-[3.5rem] animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />

      <div className="space-y-4">
        <div className="rounded-lg border border-border-gray-200 bg-bg-gray-200 p-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-gray-200" />

              <div className="space-y-2">
                <div className="h-4 w-[9rem] animate-pulse rounded-md bg-gray-200" />
                <div className="h-3.5 w-[7rem] animate-pulse rounded-md bg-gray-200" />
              </div>
            </div>

            <div className="h-4 w-[5rem] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[90%] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[95%] animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[85%] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="mt-4 flex flex-wrap gap-5">
            <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
          </div>
        </div>

        <div className="rounded-lg border border-border-gray-200 bg-bg-gray-200 p-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-gray-200" />

              <div className="space-y-2">
                <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
                <div className="h-3.5 w-[6rem] animate-pulse rounded-md bg-gray-200" />
              </div>
            </div>

            <div className="h-4 w-[5rem] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-4 w-[95%] animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[80%] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[90%] animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[75%] animate-pulse rounded-md bg-gray-200" />
          </div>

          <div className="mt-4 flex flex-wrap gap-5">
            <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
            <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
