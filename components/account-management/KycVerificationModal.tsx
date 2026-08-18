"use client";
import moment from "moment";
import Image from "next/image";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { IoEyeOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";
import kycIcon from "@/assets/kycIcon.svg";
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
  console.log(kycVerificationData, "kyc verifications");
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const files: FileItem[] = [
    {
      title: "Upload ID Front",
      filename: "ID Card Front Document",
      fileUrl: kycVerificationData?.kyc?.idFront,
    },
    {
      title: "Upload ID Back",
      filename: "ID Card Back Document",
      fileUrl: kycVerificationData?.kyc?.idBack,
    },
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-[1.25rem] font-sans">
      <div className="relative w-full max-w-[55rem] bg-white rounded-[1rem] shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-[1.25rem] ">
          <div className="flex items-center gap-[1.4rem]">
            <div className="flex items-center justify-center w-[2.719rem] h-[2.719rem] bg-border-shadow-pink rounded-full text-white">
              <Image
                src={kycIcon}
                width={100}
                height={100}
                alt=""
                className="w-[1.083rem] h-[1.083rem] text-brand-primary"
              />
            </div>
            <h2 className="text-[1.125rem] font-medium text-text-light font-inter">
              KYC Identity Verification
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-text-light font-medium hover:text-gray-600 cursor-pointer transition-colors p-[0.25rem] rounded-[0.375rem]"
          >
            <IoCloseOutline className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-[1.25rem] pt-0 overflow-y-auto flex flex-col gap-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[1.25rem] gap-x-[2.5rem] border p-[1rem] rounded-[0.75rem] border-border-gray-200 bg-surface-DEFAULT">
            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-text-secondary font-inter">
                Date Of Birth
              </span>
              <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                {moment(kycVerificationData?.kyc?.dob).format("YYYY-MM-DD")}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
                  <span className="text-[0.875rem] font-semibold text-text-secondary font-inter">
                Nationality
              </span>
          <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                {kycVerificationData?.kyc?.nationality}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
                  <span className="text-[0.875rem] font-semibold text-text-secondary font-inter">
                Residential Address
              </span>
                 <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                {kycVerificationData?.kyc?.residentialAddress}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-text-secondary font-inter">
                Government Id Type
              </span>
                <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                {kycVerificationData?.kyc?.governmentIdType}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-text-secondary font-inter">
                Phone Number
              </span>
                <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                {kycVerificationData?.kyc?.phone}
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-text-secondary font-inter">
                ID Number
              </span>
                <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                {kycVerificationData?.kyc?.idNumber}
              </span>
            </div>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[0.5rem]">
            {files.map((file, idx) => (
              <div key={idx} className="flex flex-col gap-[0.5rem]">
                      <span className="text-[1rem] font-semibold text-text-light font-open-sans">
                  {file.title}
                </span>

               <div className="flex items-center justify-between p-[1rem] border border-border-gray-200 rounded-[0.75rem] bg-surface-DEFAULT hover:border-gray-300 transition-all">
                  <div className="flex items-center gap-[0.75rem]">
                    <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-kyc-bg text-kyc-text rounded-[0.375rem]">
                      <span className="text-[0.75rem] font-bold">PDF</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        {file.filename}
                      </span>
                     
                    </div>
                  </div>

                  <a
                    href={file?.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer p-[0.5rem] text-text-setting-light hover:text-brand-primary transition-colors"
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
