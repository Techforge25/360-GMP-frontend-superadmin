"use client";
import { includedItems } from "@/constants/subscription/includedItems";
import moment from "moment";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import checkIcon from "@/assets/checkIcon.svg";
import { SubscriptionLastPlan } from "@/types";
interface Props {
  startDate: string;
  endDate: string;
  planName: string;
  planPrice: number;
  lastPlane: SubscriptionLastPlan | null;
}

export default function SubscriptionPlanDetails({
  startDate,
  endDate,
  planName,
  planPrice,
  lastPlane,
}: Props) {
  return (
    <div className="border border-gray-200 rounded-[0.5rem] overflow-hidden bg-surface-DEFAULT mt-5">
      <div className="px-[1.5rem] py-[1rem] border-b border-border-gray-200 bg-bg-gray-200">
        <h3 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
          Subscription/Current Plan Details
        </h3>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[1.5rem]">
        <div className="border border-gray-200 rounded-[0.5rem] bg-bg-gray-200 p-[1.25rem] flex flex-col gap-[1.25rem]">
          <div className="flex flex-col gap-[0.25rem] border-b border-bg-light-icon pb-4">
            <h4 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
              Plan Detail
            </h4>
            <p className="text-[1rem] text-text-secondary font-normal font-inter ">
              Review payment details
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] pt-[0.25rem]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[1rem] font-normal text-text-light font-inter">
                  {planName} Tier ( Monthly )
                </span>
                <span className="text-[1rem] text-text-secondary font-normal font-inter">
                  {moment(startDate).format("MMM DD, YYYY")} -{" "}
                  {moment(endDate).format("MMM DD, YYYY")}
                </span>
              </div>
              <span className="text-[1.125rem] font-semibold text-text-dark font-inter">
                ${planPrice?.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between py-[0.75rem] border-b border-bg-light-icon">
              <span className="text-[1rem] text-text-dark font-normal font-inter">
                Renewal Date
              </span>
              <span className="text-[1.125rem] font-normal font-inter text-brand-business">
                {moment(endDate).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] pt-[0.5rem]">
            <div className="flex flex-col gap-[0.5rem] pt-[0.25rem]">
              <span className="text-[1rem] font-bold text-text-secondary font-inter">
                Included In Premium
              </span>
              <div className="flex flex-col gap-[0.625rem]">
                {includedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-[0.625rem] text-[1rem] text-kyc-text-subheading font-medium"
                  >
                    <span className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full  text-text-dark-green">
                      <Image
                        src={checkIcon}
                        width={100}
                        height={100}
                        alt=""
                        className="w-[0.966rem] h-[0.702rem]"
                      />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {lastPlane && (
            <div className="border border-gray-200 rounded-[0.5rem] bg-bg-gray-200 p-[1.25rem] flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[0.25rem] border-b border-bg-light-icon pb-4">
                <h4 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
                  Previous Month Plan
                </h4>
                <p className="text-[1rem] text-text-secondary font-normal font-inter ">
                  Review subscription plan details from the previous billing
                  period.
                </p>
              </div>

              <div className="flex flex-col gap-[1rem] pt-[0.25rem]">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[1rem] font-normal text-text-light font-inter">
                      {lastPlane?.planName} Tier ( Monthly )
                    </span>
                    <span className="text-[1rem] text-text-secondary font-normal font-inter">
                      {moment(lastPlane?.startDate).format("MMM DD, YYYY")} -{" "}
                      {moment(lastPlane?.endDate).format("MMM DD, YYYY")}
                    </span>
                  </div>
                  <span className="text-[1.125rem] font-semibold text-text-dark font-inter">
                    ${lastPlane?.planPrice?.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
