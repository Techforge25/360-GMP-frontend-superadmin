"use client";
import useProductSpecifications from "@/hooks/useProductSpecifications";
import { ProductSpecificationsProps } from "@/types";
import DOMPurify from "dompurify";

export default function ProductSpecifications({
  category,
  shippingCompany,
  shippingCost,
  estimatedDeliveryDays,
  minOrderQty,
  detail
}: ProductSpecificationsProps) {
  const specifications = useProductSpecifications(category,
    shippingCompany,
    shippingCost,
    estimatedDeliveryDays,
    minOrderQty,
  )

  return (
    <div className="rounded-2xl border border-border-gray-200 border bg-surface-DEFAULT p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-xl font-medium text-slate-500">
        Product Specifications
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="overflow-hidden rounded-xl border border-gray-300 divide-y divide-gray-200">
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
        <div className="rounded-xl bg-[#F4F4F5] p-6 border-gray-200 border">
          <h3 className="mb-4 text-[17px] font-semibold text-gray-900">
            Product Detail
          </h3>

          <p className="text-[15px] leading-relaxed text-gray-600"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(detail),
            }}
          />
        </div>
      </div>
    </div>
  );
}
