"use client";
import React, { useRef, useState } from "react";
import { MdOutlineAccountTree } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import KycVerificationModal, {
  KycVerificationModalRef,
} from "../../KycVerificationModal";
import { TypeExecutiveLeadership, TypeParentCompany, TypePrimaryContactPerson } from "@/types";

interface Props {
  primaryContactPerson: TypePrimaryContactPerson | any;
  executiveAndLeadership: TypeExecutiveLeadership | any;
  ownedByAnotherCompany: boolean;
  parentCompany: TypeParentCompany | any;
}

export default function BusinessIntelligence({ primaryContactPerson, executiveAndLeadership, ownedByAnotherCompany, parentCompany }: Props) {
  console.log(executiveAndLeadership, 'executive and leadership')
  const kycModalRef = useRef<KycVerificationModalRef>(null);
  const [kycSingleData, setSingleData] = useState<null>(null)

  const handleOpenKycModal = (data: any) => {
    kycModalRef.current?.open();
    setSingleData(data)
  };
  return (
    <div className="mt-8 border border-gray-200 rounded-[0.5rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-[#f5effa] px-[1.5rem] py-[1.25rem] border-b border-gray-200">
        <MdOutlineAccountTree className="w-[1.25rem] h-[1.25rem] text-[#2c0a59]" />
        <h2 className="text-[1rem] font-semibold text-[#334155]">
          Business Intelligence & Leadership
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.5rem]">
          <h3 className="text-[1rem] font-semibold text-[#64748b] mb-[1.25rem]">
            Primary Contact Person
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.25rem] gap-x-[1.5rem]">
            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Name
              </span>
              <span className="text-[0.875rem] text-[#64748b]">{primaryContactPerson?.name}</span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Title
              </span>
              <span className="text-[0.875rem] text-[#94a3b8]">{primaryContactPerson?.title}</span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Phone Number
              </span>
              <span className="text-[0.875rem] text-[#64748b]">
                {primaryContactPerson?.phone}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Email
              </span>
              <span className="text-[0.875rem] text-[#64748b]">
                {primaryContactPerson?.supportEmail}
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[0.5rem] border border-gray-100 bg-[#f8f9fb]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f1f5f9]">
                <th className="p-[1rem] text-[0.875rem] font-semibold text-[#475569]">
                  Name
                </th>
                <th className="p-[1rem] text-[0.875rem] font-semibold text-[#475569]">
                  Ownership %
                </th>
                <th className="p-[1rem] text-[0.875rem] font-semibold text-[#475569]">
                  Role
                </th>
                <th className="p-[1rem] text-[0.875rem] font-semibold text-[#475569]">
                  Nature Of Control
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {executiveAndLeadership?.map(
                (executive: TypeExecutiveLeadership | any, index: number) =>
                  executive?.ownershipPercentage >= 25 ? (
                    <tr key={index}>
                      <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                        {executive.name}
                      </td>
                      <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                        {executive.ownershipPercentage}
                      </td>
                      <td className="p-[1rem] text-[0.875rem] text-[#94a3b8]">
                        {executive.role}
                      </td>
                      <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                        <button
                          onClick={() => handleOpenKycModal(executive)}
                          className="cursor-pointer rounded-[0.375rem] p-[0.25rem] transition-colors hover:bg-gray-200"
                          title="View KYC Verification"
                        >
                          <AiOutlineEye className="h-[1.25rem] w-[1.25rem] text-[#64748b]" />
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={index}>
                      <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                        {executive?.name}
                      </td>
                      <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                        {executive?.ownershipPercentage}
                      </td>
                      <td className="p-[1rem] text-[0.875rem] text-[#94a3b8]">
                        {executive?.role}
                      </td>
                      {executive?.votingRights?.map((rights: string, index: number) => {
                        return (
                          <td key={index} className="p-[1rem] text-[0.875rem] text-[#64748b]">
                            {rights}
                          </td>
                        )
                      })}
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>

        {ownedByAnotherCompany && (
          <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[0.875rem] font-semibold text-[#475569]">
                  Parent / Holding Company Name
                </span>
                <span className="text-[0.875rem] text-[#64748b]">{parentCompany?.companyName}</span>
              </div>

              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[0.875rem] font-semibold text-[#475569]">
                  Ownership Percentage
                </span>
                <span className="text-[0.875rem] text-[#64748b]">{parentCompany?.ownershipPercentage}</span>
              </div>

              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[0.875rem] font-semibold text-[#475569]">
                  Country Of Incorporation
                </span>
                <span className="text-[0.875rem] text-[#64748b]">
                  {parentCompany?.countryOfIncorporation}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <KycVerificationModal ref={kycModalRef} kycVerificationData={kycSingleData} />
    </div>
  );
}
