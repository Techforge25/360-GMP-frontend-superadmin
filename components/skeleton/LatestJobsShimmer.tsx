"use client";

import React from "react";

export default function LatestJobsShimmer() {
  return (
    <div className="space-y-3">
      <div className="relative rounded-lg border border-border-gray-200 p-3">
        <div className="flex gap-2">
          <div className="h-[3.287rem] w-[3.287rem] shrink-0 animate-pulse rounded-md bg-gray-200" />

          <div className="min-w-0 flex-1">
            <div className="h-4 w-[10rem] animate-pulse rounded-md bg-gray-200" />

            <div className="mt-2 flex items-center gap-2">
              <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
              <div className="h-3 w-2 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-[3rem] animate-pulse rounded-md bg-gray-200" />
            </div>

            <div className="mt-2 flex items-center gap-3">
              <div className="h-4 w-[8rem] animate-pulse rounded-md bg-gray-200" />
              <div className="h-3 w-px bg-gray-200" />
              <div className="h-4 w-[5rem] animate-pulse rounded-md bg-gray-200" />
            </div>
          </div>

          <div className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>

      <div className="relative rounded-lg border border-border-gray-200 p-3">
        <div className="flex gap-2">
          <div className="h-[3.287rem] w-[3.287rem] shrink-0 animate-pulse rounded-md bg-gray-200" />

          <div className="min-w-0 flex-1">
            <div className="h-4 w-[9rem] animate-pulse rounded-md bg-gray-200" />

            <div className="mt-2 flex items-center gap-2">
              <div className="h-4 w-[7rem] animate-pulse rounded-md bg-gray-200" />
              <div className="h-3 w-2 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-[3rem] animate-pulse rounded-md bg-gray-200" />
            </div>

            <div className="mt-2 flex items-center gap-3">
              <div className="h-4 w-[7rem] animate-pulse rounded-md bg-gray-200" />
              <div className="h-3 w-px bg-gray-200" />
              <div className="h-4 w-[5rem] animate-pulse rounded-md bg-gray-200" />
            </div>
          </div>

          <div className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 animate-pulse rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
