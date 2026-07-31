"use client";
import React, { useRef } from "react";
import { MdOutlineAccountTree } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import KycVerificationModal, {
  KycVerificationModalRef,
} from "../../KycVerificationModal";

export default function BusinessIntelligence() {
  const kycModalRef = useRef<KycVerificationModalRef>(null);

  const handleOpenKycModal = () => {
    kycModalRef.current?.open();
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
              <span className="text-[0.875rem] text-[#64748b]">John</span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Title
              </span>
              <span className="text-[0.875rem] text-[#94a3b8]">CEO</span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Phone Number
              </span>
              <span className="text-[0.875rem] text-[#64748b]">
                +1 201 465123
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Email
              </span>
              <span className="text-[0.875rem] text-[#64748b]">
                Ceo@Merchant.Com
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[1rem] font-semibold text-[#475569] mb-[1rem]">
            Executive Leadership & Stakeholders
          </h3>

          <div className="overflow-hidden rounded-[0.5rem] border border-gray-100 bg-[#f8f9fb]">
            <table className="w-full text-left border-collapse">
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
                    Nature Of Controle
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                    Alexander Sterling
                  </td>
                  <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                    30
                  </td>
                  <td className="p-[1rem] text-[0.875rem] text-[#94a3b8]">
                    CFO
                  </td>
                  <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                    <button
                      onClick={handleOpenKycModal}
                      className="p-[0.25rem] hover:bg-gray-200 rounded-[0.375rem] transition-colors cursor-pointer"
                      title="View KYC Verification"
                    >
                      <AiOutlineEye className="w-[1.25rem] h-[1.25rem] text-[#64748b]" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                    John
                  </td>
                  <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                    20
                  </td>
                  <td className="p-[1rem] text-[0.875rem] text-[#94a3b8]">
                    CEO
                  </td>
                  <td className="p-[1rem] text-[0.875rem] text-[#64748b]">
                    Voting Rights
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Parent / Holding Company Name
              </span>
              <span className="text-[0.875rem] text-[#64748b]">NexusPeak</span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Ownership Percentage
              </span>
              <span className="text-[0.875rem] text-[#64748b]">10%</span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                Country Of Incorporation
              </span>
              <span className="text-[0.875rem] text-[#64748b]">
                +1 201 465123
              </span>
            </div>
          </div>
        </div>
      </div>
      <KycVerificationModal ref={kycModalRef} />
    </div>
  );
}
