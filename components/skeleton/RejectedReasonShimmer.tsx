"use client";

export default function RejectedReasonShimmer() {
  return (
    <div className="mt-[1.5rem] border mb-7 border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center justify-between gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
        <div className="h-[1.25rem] w-[12rem] rounded-md bg-gray-200 animate-pulse" />

        <div className="h-[1.75rem] w-[5.5rem] rounded-full bg-gray-200 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-[1.5rem]">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col gap-[0.5rem]">
            <div className="h-[1rem] w-[6rem] rounded-md bg-gray-200 animate-pulse" />

            <div className="h-[1.25rem] w-[8rem] rounded-md bg-gray-200 animate-pulse" />
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 p-4 sm:col-span-2">
          <div className="flex flex-col gap-[0.5rem]">
            <div className="h-[1rem] w-[8rem] rounded-md bg-gray-200 animate-pulse" />

            <div className="h-[1.25rem] w-[85%] rounded-md bg-gray-200 animate-pulse" />
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 p-4 sm:col-span-2">
          <div className="flex flex-col gap-[0.5rem]">
            <div className="h-[1rem] w-[7rem] rounded-md bg-gray-200 animate-pulse" />

            <div className="h-[1.25rem] w-[65%] rounded-md bg-gray-200 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
