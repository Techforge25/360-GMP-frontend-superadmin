"use client";

import { TbNetwork } from "react-icons/tb";

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
    <div className="rounded-[0.75rem] border border-gray-200 bg-white">
      <div className="flex items-center gap-[0.75rem] border-b border-gray-200 p-[1.5rem]">
        <TbNetwork className="h-[1.5rem] w-[1.5rem] text-[#2c0a59]" />
        <h2 className="text-[1.125rem] font-semibold text-[#1e293b]">
          Operational & Trade Profile
        </h2>
      </div>

      <div className="flex flex-col gap-[2rem] p-[1.5rem]">
        <div className="grid grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem] md:grid-cols-2">
          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Auditing Agency
            </span>
            <span className="text-[0.9375rem] font-medium text-[#1e293b]">
              {auditingAgency}
            </span>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <span className="text-[0.875rem] font-semibold text-[#64748b]">
              Trade Affiliations
            </span>

            <div className="flex flex-wrap gap-[0.5rem]">
              {Array.isArray(tradeAffiliations) &&
                tradeAffiliations.length > 0 ? (
                tradeAffiliations.map((trade: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block rounded-[1.25rem] bg-[#2c0a59] px-[1.25rem] py-[0.375rem] text-[0.8125rem] font-semibold text-white"
                  >
                    {trade}
                  </span>
                ))
              ) : (
                <span className="text-[0.875rem] font-semibold text-[#64748b]">
                  N/A
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <span className="text-[0.875rem] font-semibold text-[#64748b]">
            Region Of Operations
          </span>

          <div className="flex flex-wrap gap-[0.5rem]">
            {Array.isArray(regionOfOperations) &&
              regionOfOperations.length > 0 ? (
              regionOfOperations.map((region: string, index: number) => (
                <span
                  key={index}
                  className="inline-block rounded-[1.25rem] bg-[#2c0a59] px-[1.25rem] py-[0.375rem] text-[0.8125rem] font-semibold text-white"
                >
                  {region}
                </span>
              ))
            ) : (
              <span className="text-[0.875rem] font-semibold text-[#64748b]">
                N/A
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}