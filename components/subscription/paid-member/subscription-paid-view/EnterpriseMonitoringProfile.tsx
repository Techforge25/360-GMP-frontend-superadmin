"use client";
import { HiOutlineMail } from "react-icons/hi";
import UserDetailsShimmer from "@/components/skeleton/UserDetailsShimmer";
import StatusBadge from "@/constants/acount-management/StatusBadge";
import moment from "moment";
import ContatEmail from "@/assets/contant-email.svg";
import checkIcon from "@/assets/checkIcon.svg";
import Image from "next/image";
interface Props {
  isPending: boolean;
  email: string;
  planName: string;
  lifetimeValue: number;
  joinDate: string;
}

export default function EnterpriseMonitoringProfile({
  isPending,
  email,
  planName,
  lifetimeValue,
  joinDate,
}: Props) {
  return (
    <div className="p-[1.5rem]  bg-white font-sans flex flex-col gap-[1.5rem] border border-gray-200 rounded-[0.75rem] shadow-sm">
      {isPending ? (
        <UserDetailsShimmer />
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[0.25rem]">
              <h1 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
                Subscription Details
              </h1>
              <p className="text-[0.875rem] font-normal font-inter text-kyc-text-heading">
                View current subscription, billing information, plan
                features and renewal date in one place.
              </p>
            </div>

            <div className="flex items-center gap-[0.375rem] px-[1.5rem] py-[0.15rem]  text-[0.875rem] font-medium rounded-full ">
              <StatusBadge status={planName} />
            </div>
          </div>

          <div className="flex items-center justify-between p-[1rem] bg-bg-white-light border border-border-gray-200 rounded-[0.5rem]">
            <div className="flex items-center gap-[1rem]">
              <div className="flex flex-col gap-[0.25rem]">
                <div className="flex items-center gap-[0.75rem] text-[1rem] text-kyc-text-heading">
                  <div className="flex items-center gap-[0.375rem]">
                    <HiOutlineMail className="w-[1.146rem] h-[1.146rem] text-text-secondary" />
                    <span className="text-[1rem] font-normal font-inter">
                      {email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${email}`}
              // onClick={() => alert("Contacting Alex Morgan...")}
              className="flex items-center gap-[0.5rem] px-[1.125rem] py-[0.625rem] bg-kyc-text-hover hover:bg-text-primary-hover text-white font-normal font-inter text-[1rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
            >
              <span>Contact</span>
              <Image
                src={ContatEmail}
                width={100}
                height={100}
                alt=""
                className="w-[1.146rem] h-[0.917rem]"
              />
            </a>
          </div>

         

          <div className="border border-bg-light-icon rounded-[0.75rem] p-[1rem] bg-surface-DEFAULT flex flex-col gap-[0.5rem]">
            <span className="text-[1rem] font-inter font-normal text-kyc-text-heading font-medium">
              Life Time Value
            </span>
            <h3 className="text-[2rem] font-semibold text-kyc-text-subheading tracking-tight font-open-sans">
              ${lifetimeValue?.toFixed(2)}
            </h3>
            <p className="text-[0.875rem] text-kyc-text-heading pt-[0.25rem] font-inter font-normal">
              Total Collected Revenue Since {moment(joinDate).format("YYYY")}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
