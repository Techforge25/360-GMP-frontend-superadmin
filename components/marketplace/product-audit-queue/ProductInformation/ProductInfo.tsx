"use client";

import Image from "next/image";

export default function ProductInfo() {
  return (
    <div className="w-full lg:w-[60%] flex flex-col pt-2 rounded-2xl border-gray-200 border bg-white p-6 md:p-4 shadow-sm">
      <h1 className="text-[1.35rem] font-semibold text-gray-900 leading-tight">
        ANC Pro Wireless Earbuds
      </h1>
      <p className="mt-2 text-[1rem] text-gray-600 leading-relaxed">
        High-fidelity audio with Active Noise Cancellation for hands-free
        factory communication.
      </p>

      <div className="mt-8 flex items-end justify-between border-b border-border-gray-dark pb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-[2rem] font-bold text-gray-900 leading-none">
            $98.00
          </span>
          <span className="text-[1rem] text-gray-500 font-medium">/Pc</span>
        </div>
        <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
          MOQ: 100 pc
        </span>
      </div>

      <div className="mt-6 w-full rounded-xl bg-[#F4F4F5] p-4 flex items-center justify-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white border border-gray-200 shadow-sm">
          <Image src="/images/image 55.png" alt="Logo" width={28} height={28} />
        </div>
        <span className="text-[1.25rem] font-medium text-text-light">
          Global Manufacturing Co.
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <div className="flex justify-between items-center pb-5 border-b border-gray-100">
          <span className="text-[1rem] text-gray-500">Product category</span>
          <span className="text-[1rem] font-medium text-gray-700">
            Electronic
          </span>
        </div>
        <div className="flex justify-between items-center pb-5 border-b border-gray-100">
          <span className="text-[1rem] text-gray-500">MOQ</span>
          <span className="text-[1rem] font-medium text-gray-700">100</span>
        </div>
      </div>
    </div>
  );
}
