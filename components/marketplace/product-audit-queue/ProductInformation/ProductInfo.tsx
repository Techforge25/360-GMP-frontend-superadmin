"use client";

import Image from "next/image";
import BundlePricing from "./BundlePricing";
import useProductSpecifications from "@/hooks/useProductSpecifications";

interface Props {
  title: string;
  pricePerUnit: number;
  minOrderQty: number;
  companyName: string;
  logo: string;
  category: string;
  tieredPricing: {
    qty: string;
    price: number;
    _id: string;
  }[];
}

export default function ProductInfo({
  title,
  pricePerUnit,
  minOrderQty,
  companyName,
  logo,
  category,
  tieredPricing,
}: Props) {
    const specifications = useProductSpecifications(
      category,
      minOrderQty,
    );
  return (
    <div className="w-full lg:w-[60%] flex flex-col pt-2 rounded-2xl border-bg-light-icon border bg-surface-DEFAULT p-6 md:p-4 shadow-sm">
      <h1 className="text-[1.35rem] font-semibold text-gray-900 leading-tight break-words whitespace-normal">
        {title}
      </h1>

      <div className="mt-8 flex items-end justify-between border-b border-border-gray-dark pb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-[2rem] font-semibold text-text-primary leading-none font-open-sans">
            ${pricePerUnit?.toFixed(2)}
          </span>
          <span className="text-[1.125rem] text-text-gray-more font-semibold font-open-sans">
            /Pc
          </span>
        </div>
      </div>

      <div className="mt-6 w-full rounded-xl bg-[#F4F4F5] p-4 flex items-center justify-center gap-3">
        <div className="flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-md bg-white border border-gray-200 shadow-sm">
          <Image
            src={logo}
            alt="Logo"
            width={28}
            height={28}
            className="h-[1.938rem] w-[1.938rem]"
          />
        </div>
        <span className="text-[1.125rem] font-normal font-inter text-text-dark">
          {companyName}
        </span>
      </div>
      {tieredPricing?.some((item) => item.qty !== "0") && (
        <BundlePricing bundles={tieredPricing} />
      )}
      <div className="overflow-hidden rounded-xl border mt-10 border-gray-300 divide-y divide-gray-200">
          {specifications?.map((item, index) => (
            <div
              key={item.label}
              className={`flex justify-between p-4 ${index % 2 === 0 ? "bg-[#F8F9FA]" : "bg-white"
                }`}
            >
              <span className="w-1/2 font-semibold text-gray-800">
                {item.label}
              </span>

              <span className="w-1/2 text-gray-600">{item.value}</span>
            </div>
          ))}
        </div>
    </div>
  );
}
