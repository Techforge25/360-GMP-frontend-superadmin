"use client";
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
}

const KycVerificationModal = forwardRef<
  KycVerificationModalRef,
  KycVerificationModalProps
>(({ onConfirm }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const files: FileItem[] = [
    { title: "Upload ID Front", filename: "ID Card Front", fileUrl: "#" },
    { title: "Upload ID Back", filename: "ID Card Back", fileUrl: "#" },
    {
      title: "Proof Of Residential Address",
      filename: "Proof Of Residential Address",
      fileUrl: "#",
    },
    {
      title: "Proof Of Ownership",
      filename: "Proof Of Ownership",
      fileUrl: "#",
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
                26-07-1998
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Nationality
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                United States
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Residential Address
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading leading-[1.375rem]">
                1270 North Ave, Apt 3B
                <br />
                New Rochelle, NY 10804
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Government Id Type
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                National Id
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                Phone Number
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                +1 3052074593
              </span>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
                ID Number
              </span>
              <span className="text-[0.9375rem] font-medium text-kyc-text-subheading">
                National Id
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[0.5rem] mt-[0.5rem]">
            <span className="text-[0.875rem] font-semibold text-kyc-text-heading">
              Region Of Operations
            </span>
            <div>
              <span className="inline-block px-[1.25rem] py-[0.375rem] bg-brand-primary text-white text-[0.8125rem] font-semibold rounded-[1.25rem]">
                North America
              </span>
            </div>
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

                  <button
                    onClick={() => handleViewFile(file)}
                    className="p-[0.5rem] text-gray-500 cursor-pointer hover:text-kyc-text-hover transition-colors"
                    title="View file"
                  >
                    <IoEyeOutline className="w-[1.25rem] h-[1.25rem]" />
                  </button>
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