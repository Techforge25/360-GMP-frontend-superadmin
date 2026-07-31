"use client";
import { HiOutlineMail } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import BackButtonMain from "@/components/common/BackButtonMain";

export default function TrialMonitoringProfile() {
  return (
    <>
      <BackButtonMain text="Back" />
      <div className=" mt-4 p-[1.5rem] bg-white font-sans flex flex-col gap-[1.5rem] border border-border-gray-light rounded-[0.75rem] shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[0.25rem]">
            <h1 className="text-[1.375rem] font-bold text-kyc-text-subheading">
              Trial Monitoring
            </h1>
            <p className="text-[0.875rem] text-kyc-text-heading">
              detailed view of Alex Morgan
            </p>
          </div>

          <span className="px-[1rem] py-[0.25rem]  text-text-light-grayed text-[0.8125rem] font-semibold rounded-full border border-gray-200">
            Trial
          </span>
        </div>

        <div className="flex items-center justify-between p-[1rem] bg-[#f8fafc] border border-gray-200 rounded-[0.5rem]">
          <div className="flex items-center gap-[1rem]">
            <div className="flex flex-col gap-[0.25rem]">
              <div className="flex items-center gap-[0.75rem] text-[1rem] text-kyc-text-heading">
                <div className="flex items-center gap-[0.375rem]">
                  <HiOutlineMail className="w-[1rem] h-[1rem] text-text-secondary" />
                  <span className="text-[1rem] ">alexmorgan@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert("Contacting Alex Morgan...")}
            className="flex items-center gap-[0.5rem] px-[1.25rem] py-[0.625rem] bg-[#2c0a59] hover:bg-[#1d053b] text-white font-medium text-[0.875rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
          >
            <span>Contact</span>
            <HiOutlineMail className="w-[1rem] h-[1rem]" />
          </button>
        </div>

        <div className="border border-gray-200 rounded-[0.5rem] overflow-hidden bg-white">
          <div className="px-[1.5rem] py-[1rem] border-b border-gray-200 bg-white">
            <h3 className="text-[1.375rem] font-semibold text-kyc-text-subheading">
              Subscription/Current Plan Details
            </h3>
          </div>

          <div className="p-[1.5rem] flex flex-col gap-[1.5rem]">
            <div className="border border-gray-200 rounded-[0.5rem] bg-[#fcfcfd] p-[1.25rem] flex flex-col gap-[1.25rem]">
              <div className="flex flex-col gap-[0.25rem]">
                <h4 className="text-[1.375rem] font-bold text-kyc-text-subheading">
                  Plan Detail
                </h4>
                <p className="text-[1rem] text-kyc-text-heading">
                  Review your payment details
                </p>
              </div>

              <div className="flex flex-col gap-[1rem] pt-[0.25rem]">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[1rem] font-semibold text-kyc-text-subheading">
                      Free Tier (Monthly)
                    </span>
                    <span className="text-[1rem text-kyc-text-heading">
                      Oct 15,2025 - Oct 30,2025
                    </span>
                  </div>
                  <span className="text-[1.25rem] font-semibold text-kyc-text-subheading">
                    $0.00
                  </span>
                </div>

                <div className="flex items-center justify-between py-[0.75rem] border-b border-gray-200">
                  <span className="text-[1rem] text-kyc-text-heading">
                    Renewal Date
                  </span>
                  <span className="text-[1.25rem] font-medium text-text-purple">
                    Oct 30,2025
                  </span>
                </div>

                <div className="flex flex-col gap-[0.5rem] pt-[0.25rem]">
                  <span className="text-[1rem] font-semibold text-kyc-text-heading">
                    Included In Free Trial
                  </span>
                  <div className="flex items-center gap-[0.5rem] text-[1rem] text-text-setting-light font-medium">
                    <span className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full  text-text-dark-green">
                      <FiCheck className="w-[1rem] h-[1rem]" />
                    </span>
                    <span>Unlimited job postings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
