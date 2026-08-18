"use client";

import Image from "next/image";
import businessIcon from "@/assets/businessIntelegenceIcon.svg";

export default function RequiredDocumentsShimmer() {
  const shimmerDocuments = Array.from({ length: 3 });

  return (
    <div className="mt-[1.5rem] border mb-7 border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
        <Image
          src={businessIcon}
          width={100}
          height={100}
          alt=""
          className="w-[1.083rem] h-[1.083rem] opacity-50"
        />

        <div className="h-[1.375rem] w-[12rem] rounded-md bg-gray-200 animate-pulse" />
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.5rem] gap-y-[1.5rem]">
          {shimmerDocuments.map((_, index) => (
            <div key={index} className="flex flex-col gap-[0.75rem]">
              <div className="h-[1.25rem] w-[75%] rounded-md bg-gray-200 animate-pulse" />

              <div className="flex items-center justify-between p-[1rem] border border-border-gray-200 rounded-[0.75rem] bg-surface-DEFAULT">
                <div className="flex items-center gap-[0.75rem] flex-1">
                  <div className="flex flex-col gap-[0.375rem] w-full">
                    <div className="h-[1rem] w-[80%] rounded-md bg-gray-200 animate-pulse" />
                  </div>
                </div>

                <div className="w-[2.25rem] h-[2.25rem] rounded-md bg-gray-200 animate-pulse flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[1rem] pt-[0.5rem] border-t border-gray-100">
          <div className="h-[1.25rem] w-[15rem] rounded-md bg-gray-200 animate-pulse" />

          <div className="flex flex-col gap-[0.75rem]">
            <div className="h-[1.25rem] w-[14rem] rounded-md bg-gray-200 animate-pulse" />

            <div className="max-w-[26rem]">
              <div className="flex items-center justify-between p-[0.875rem] border border-gray-200 rounded-[0.5rem] bg-[#fcfcfd]">
                <div className="flex items-center gap-[0.75rem] flex-1">
                  <div className="flex flex-col gap-[0.375rem] w-full">
                    <div className="h-[1rem] w-[70%] rounded-md bg-gray-200 animate-pulse" />
                  </div>
                </div>

                <div className="w-[2.25rem] h-[2.25rem] rounded-md bg-gray-200 animate-pulse flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
