"use client";
import { includedItems } from "@/constants/subscription/includedItems";
import moment from "moment";
import { FiCheck } from "react-icons/fi";

interface Props {
  startDate: string;
  endDate: string;
  planName: string;
  planPrice: number;
}

export default function SubscriptionPlanDetails({ startDate, endDate, planName, planPrice }: Props) {
  return (
    <div className="mt-7 border border-gray-200 rounded-[0.5rem] bg-white font-sans overflow-hidden shadow-sm">
      <div className="px-[1.5rem] py-[1.25rem] border-b border-gray-200 bg-white">
        <h2 className="text-[1.375rem] font-semibold text-kyc-text-subheading">
          Subscription/Current Plan Details
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[1.5rem]">


        <div className="border border-gray-200 rounded-[0.5rem] bg-kyc-bg-border-gray p-[1.5rem] flex flex-col gap-[1.25rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1.375rem] font-bold text-kyc-text-subheading">
              Plan Detail
            </h3>
            <p className="text-[1rem] text-kyc-text-heading">
              Review your payment details
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] pt-[0.25rem]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[1rem] font-semibold text-kyc-text-subheading">
                  {planName} Tier ( Monthly )
                </span>
                <span className="text-[1rem] text-kyc-text-heading">
                  {moment(startDate).format("MMM DD, YYYY")} - {moment(endDate).format("MMM DD, YYYY")}
                </span>
              </div>
              <span className="text-[1.125rem] font-semibold text-kyc-text-subheading">
                ${planPrice?.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between py-[0.75rem] border-t border-gray-200">
              <span className="text-[1rem] text-kyc-text-heading">Renewal Date</span>
              <span className="text-[1.125rem] font-medium text-text-purple">
                Nov 12,2025
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] pt-[0.5rem]">

            <div className="flex flex-col gap-[0.75rem] pt-[0.5rem]">
              <span className="text-[1rem] font-semibold text-kyc-text-heading">
                Included In Premium
              </span>
              <div className="flex flex-col gap-[0.625rem]">
                {includedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-[0.625rem] text-[1rem] text-kyc-text-subheading font-medium"
                  >
                    <span className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full text-text-dark-green">
                      <FiCheck className="w-[1rem] h-[1rem]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
