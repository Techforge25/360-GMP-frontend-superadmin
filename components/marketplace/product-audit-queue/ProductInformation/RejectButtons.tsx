"use client";

import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import RejectProductModal from "./RejectProductModalRef";
import { RejectProductModalRef } from "@/types";

interface ActionButtonsProps {
  onApprove?: () => void;
}

export default function RejectButtons({ onApprove }: ActionButtonsProps) {
  const rejectModalRef = useRef<RejectProductModalRef>(null);

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
      <div className="flex justify-end items-center gap-[1rem] font-inter pt-5">
        <button
          onClick={handleOpenRejectModal}
          className="action-Reject"
        >
          <span>Reject</span>
          <IoCloseOutline className="w-[1.25rem] h-[1.25rem]" />
        </button>

        <button
          onClick={handleApprove}
          className="approved-btn"
        >
          <span>Approve</span>
          <FiCheck className="w-[1.125rem] h-[1.125rem]" />
        </button>
      </div>

      <RejectProductModal ref={rejectModalRef} />
    </>
  );
}
