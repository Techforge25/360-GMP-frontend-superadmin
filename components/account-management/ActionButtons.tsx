"use client";

import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import RejectBusinessModal, { RejectBusinessModalRef } from "./RejectBusinessModalRef";

interface ActionButtonsProps {
  onApprove?: () => void;
}

export default function ActionButtons({ onApprove }: ActionButtonsProps) {
  const rejectModalRef = useRef<RejectBusinessModalRef>(null);

  const handleOpenRejectModal = () => {
    rejectModalRef.current?.open();
  };

  const handleApprove = () => {
    if (onApprove) {
      onApprove();
    } else {
      alert("Approved clicked");
    }
  };

  return (
    <>
      <div className="flex justify-end items-center gap-[1rem] font-sans">
        <button
          onClick={handleOpenRejectModal}
          className="flex items-center justify-center gap-[0.5rem] px-[2rem] py-[0.60rem] bg-[#ff3b30] hover:bg-[#e0342b] text-white font-semibold text-[0.9375rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
        >
          <span>Reject</span>
          <IoCloseOutline className="w-[1.25rem] h-[1.25rem]" />
        </button>

        <button
          onClick={handleApprove}
          className="flex items-center justify-center gap-[0.5rem] px-[2rem] py-[0.60rem] bg-[#008000] hover:bg-[#007000] text-white font-semibold text-[0.9375rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
        >
          <span>Approve</span>
          <FiCheck className="w-[1.125rem] h-[1.125rem]" />
        </button>
      </div>

      <RejectBusinessModal ref={rejectModalRef} />
    </>
  );
}