"use client";
import moment from "moment";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { IoEyeOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";

interface FileItem {
  title: string;
  filename: string;
  fileUrl: string;
}

export interface KycVerificationModalRef {

  open: () => void;
  close: () => void;
}

interface KycVerificationModalProps {
  onConfirm?: () => void;
  kycVerificationData: any;
}

const KycVerificationModal = forwardRef<
  KycVerificationModalRef,
  KycVerificationModalProps
>(({ onConfirm, kycVerificationData }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(kycVerificationData, 'kyc verifications')
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const files: FileItem[] = [
    { title: "Upload ID Front", filename: "ID Card Front Document", fileUrl: kycVerificationData?.kyc?.idFront },
    { title: "Upload ID Back", filename: "ID Card Back Document", fileUrl: kycVerificationData?.kyc?.idBack },
    {
      title: "Proof Of Residential Address",
      filename: "Proof Of Residential Address Document",
      fileUrl: kycVerificationData?.kyc?.proofOfResidentialAddress,
    },
    {
      title: "Proof Of Ownership",
      filename: "Proof Of Ownership Document",
      fileUrl: kycVerificationData?.kyc?.proofOfOwnership,
    },
  ];

  const handleViewFile = (file: FileItem) => {
    alert(`Viewing: ${file.filename}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-[1rem] font-sans">
      <div className="relative w-full max-w-[55rem] bg-white rounded-[1rem] shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-[1.75rem] py-[1.25rem] border-b border-gray-100">
          <div className="flex items-center gap-[0.75rem]">
            <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-kyc-bg-icon rounded-[0.5rem] text-white">
              <MdOutlineAccountTree className="w-[1.25rem] h-[1.25rem]" />
            </div>
            <h2 className="text-[1.125rem] font-bold text-gray-900">
              KYC Identity Verification
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-[0.25rem] rounded-[0.375rem]"
          >
            <IoCloseOutline className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-[1.75rem] overflow-y-auto flex flex-col gap-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[1.25rem] gap-x-[2.5rem]">
            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Date Of Birth
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                {moment(kycVerificationData?.kyc?.dob).format('YYYY-MM-DD')}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Nationality
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                {kycVerificationData?.kyc?.nationality}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Residential Address
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading leading-[1.375rem]">
                {kycVerificationData?.kyc?.residentialAddress}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Government Id Type
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                {kycVerificationData?.kyc?.governmentIdType}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Phone Number
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                {kycVerificationData?.kyc?.phone}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                ID Number
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                {kycVerificationData?.kyc?.idNumber}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[0.5rem] mt-[0.5rem]">
            <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
              Region Of Operations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[0.5rem]">
            {files.map((file, idx) => (
              <div key={idx} className="flex flex-col gap-[0.5rem]">
                <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                  {file.title}
                </span>

                <div className="flex items-center justify-between p-[0.875rem] border border-gray-200 rounded-[0.5rem] bg-[#fcfcfd] hover:border-gray-300 transition-all">
                  <div className="flex items-center gap-[0.75rem]">
                    <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-kyc-bg text-kyc-text rounded-[0.375rem]">
                      <span className="text-[0.75rem] font-bold">PDF</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.875rem] font-semibold text-kyc-text-subheading">
                        {file.filename}
                      </span>
                      <span className="text-[0.75rem] text-kyc-text-heading">
                        Certificate.PDF2
                      </span>
                    </div>
                  </div>

                  <a
                    href={file?.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer p-[0.5rem] text-gray-500 transition-colors hover:text-kyc-text-hover"
                    title="View file"
                  >
                    <IoEyeOutline className="h-[1.25rem] w-[1.25rem]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

KycVerificationModal.displayName = "KycVerificationModal";

export default KycVerificationModal;