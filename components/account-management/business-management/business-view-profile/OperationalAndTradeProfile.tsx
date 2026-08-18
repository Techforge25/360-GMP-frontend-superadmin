"use client";

import { TbNetwork } from "react-icons/tb";
import businessIcon from "@/assets/businessIntelegenceIcon.svg";
import Image from "next/image";
interface Props {
  auditingAgency: string;
  tradeAffiliations: string[] | any;
  regionOfOperations: string[] | any;
}

export default function OperationalAndTradeProfile({
  auditingAgency,
  tradeAffiliations,
  regionOfOperations,
}: Props) {
  return (
     <div className=" mt-[1.5rem] border border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
         <Image
          src={businessIcon}
          width={100}
          height={100}
          alt=""
          className="w-[1.083rem] h-[1.083rem] text-brand-primary"
        />
            <h2 className="text-[1.125rem] font-semibold font-open-sans text-text-light">
          Operational & Trade Profile
        </h2>
      </div>

      <div className="flex flex-col gap-[2rem] p-[1.5rem]">
        <div className="grid grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem] md:grid-cols-2">
          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
              Auditing Agency
            </span>
            <span className="text-[1rem] font-semibold font-open-sans text-text-light break-words whitespace-normal">
              {auditingAgency}
            </span>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
              Trade Affiliations
            </span>

            <div className="flex flex-wrap gap-[0.5rem]">
              {Array.isArray(tradeAffiliations) &&
                tradeAffiliations.length > 0 ? (
                tradeAffiliations.map((trade: string, index: number) => (
                 <span className="px-[1rem] py-[0.375rem] bg-brand-primary text-white text-[1rem] font-normal font-inter rounded-[5.75rem] break-words whitespace-normal ">
                    {trade}
                  </span>
                ))
              ) : (
                <span className="text-[0.875rem] font-semibold text-text-secondary">
                  N/A
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
            Region Of Operations
          </span>

          <div className="flex flex-wrap gap-[0.5rem]">
            {Array.isArray(regionOfOperations) &&
              regionOfOperations.length > 0 ? (
              regionOfOperations.map((region: string, index: number) => (
                <span className="px-[1rem] py-[0.375rem] bg-brand-primary text-white text-[1rem] font-normal font-inter rounded-[5.75rem]">
                  {region}
                </span>
              ))
            ) : (
              <span className="text-[0.875rem] font-semibold text-text-secondary">
                N/A
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}