"use client";
import { useRef, useState } from "react";
import { MdOutlineAccountTree } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import KycVerificationModal, {
  KycVerificationModalRef,
} from "../../KycVerificationModal";
import {
  TypeExecutiveLeadership,
  TypeParentCompany,
  TypePrimaryContactPerson,
} from "@/types";
import Image from "next/image";
import businessIcon from "@/assets/businessIntelegenceIcon.svg";
interface Props {
  primaryContactPerson: TypePrimaryContactPerson | any;
  executiveAndLeadership: TypeExecutiveLeadership | any;
  ownedByAnotherCompany: boolean;
  parentCompany: TypeParentCompany | any;
}

export default function BusinessIntelligence({
  primaryContactPerson,
  executiveAndLeadership,
  ownedByAnotherCompany,
  parentCompany,
}: Props) {
  console.log(executiveAndLeadership, "executive and leadership");
  const kycModalRef = useRef<KycVerificationModalRef>(null);
  const [kycSingleData, setSingleData] = useState<null>(null);

  const handleOpenKycModal = (data: any) => {
    kycModalRef.current?.open();
    setSingleData(data);
  };
  return (
    <div className=" mt-8 border border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
        <Image
          src={businessIcon}
          width={100}
          height={100}
          alt=""
          className="w-[1.083rem] h-[1.083rem] text-brand-primary"
        />
        <h2 className="text-[1.125rem] font-semibold font-open-sans text-text-light">
          Business Intelligence & Leadership
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="bg-bg-gray-200 border border-border-gray-dark rounded-[0.75rem] p-[1rem]">
          <h3 className="text-[1.125rem] font-semibold font-open-sans text-text-secondary mb-[1.25rem]">
            Primary Contact Person
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.25rem] gap-x-[1.5rem]">
            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                Name
              </span>
              <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                {primaryContactPerson?.name}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                Title
              </span>
              <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                {primaryContactPerson?.title}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                Phone Number
              </span>
              <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                {primaryContactPerson?.phone}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                Email
              </span>
              <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                {primaryContactPerson?.supportEmail}
              </span>
            </div>
          </div>
        </div>
        <h3 className="text-[1.125rem] font-semibold font-open-sans text-text-secondary ">
          Executive Leadership & Stakeholders
        </h3>
        <div className="bg-brand-business-button-light p-[1rem] rounded-[0.75rem]">
          <div className="overflow-hidden rounded-[0.5rem] border border-gray-100 bg-[#f8f9fb]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-bg-white-light rounded-[0.375rem] ">
                  <th className="p-[1rem] text-[1rem] font-semibold font-open-sans text-text-light">
                    Name
                  </th>
                  <th className="p-[1rem] text-[1rem] font-semibold font-open-sans text-text-light">
                    Ownership %
                  </th>
                  <th className="p-[1rem] text-[1rem] font-semibold font-open-sans text-text-light">
                    Role
                  </th>
                  <th className="p-[1rem] text-[1rem] font-semibold font-open-sans text-text-light">
                    Nature Of Control
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {executiveAndLeadership?.map(
                  (executive: TypeExecutiveLeadership | any, index: number) =>
                    executive?.ownershipPercentage >= 25 ? (
                      <tr key={index}>
                        <td className="p-[1rem] text-[0.875rem] text-text-secondary">
                          {executive.name}
                        </td>
                        <td className="p-[1rem] text-[0.875rem] text-text-secondary">
                          {executive.ownershipPercentage}
                        </td>
                        <td className="p-[1rem] text-[0.875rem] text-text-secondary">
                          {executive.role}
                        </td>
                        <td className="p-[1rem] text-[0.875rem] text-text-secondary ">
                          <button
                            onClick={() => handleOpenKycModal(executive)}
                            className="cursor-pointer rounded-[0.375rem] p-[0.25rem] w-[10rem] transition-colors flex justify-center item-center"
                            title="View KYC Verification"
                          >
                            <AiOutlineEye className="h-[1.25rem] w-[1.25rem] text-text-setting-light hover:text-brand-primary" />
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr key={index}>
                       <td className="p-[1rem] text-[0.875rem] text-text-secondary">
                          {executive?.name}
                        </td>
                         <td className="p-[1rem] text-[0.875rem] text-text-secondary">
                          {executive?.ownershipPercentage}
                        </td>
                          <td className="p-[1rem] text-[0.875rem] text-text-secondary">
                          {executive?.role}
                        </td>
                        {executive?.votingRights?.map(
                          (rights: string, index: number) => {
                            return (
                              <span
                                key={index}
                                className="p-[0.875rem] text-[0.875rem] font-normal font-inter text-text-secondary"
                              >
                                {rights}
                              </span>
                            );
                          },
                        )}
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>
        </div>
        {ownedByAnotherCompany && (
          <div className="bg-bg-gray-200 border border-border-gray-dark rounded-[0.75rem] p-[1rem]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                  Parent / Holding Company Name
                </span>
                <span className="text-[0.875rem] font-inter font-normal text-text-secondary">
                  {parentCompany?.companyName}
                </span>
              </div>

              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                  Ownership Percentage
                </span>
                <span className="text-[0.875rem] font-inter font-normal text-text-secondary">
                  {parentCompany?.ownershipPercentage}
                </span>
              </div>

              <div className="flex flex-col gap-[0.25rem]">
                <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                  Country Of Incorporation
                </span>
                <span className="text-[0.875rem] font-inter font-normal text-text-secondary">
                  {parentCompany?.countryOfIncorporation}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <KycVerificationModal
        ref={kycModalRef}
        kycVerificationData={kycSingleData}
      />
    </div>
  );
}
