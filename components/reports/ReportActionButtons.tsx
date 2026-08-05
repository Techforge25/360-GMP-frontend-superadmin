"use client";
import React, { useRef } from "react";
import {  ReportModalRef, ReportType } from "@/types";
import { FaEye } from "react-icons/fa6";
import ReportModal from "./ReportModal";

interface ReportActionButtonsProps {
  ReportId: string;
  reportType: ReportType;
}

export default function ReportActionButtons({
  ReportId,
  reportType,
}: ReportActionButtonsProps) {
  const modalRef = useRef<ReportModalRef>(null);

  return (
    <>
      <div className="flex justify-end items-center gap-[1rem] font-sans">
        <span
          onClick={() => {
            modalRef.current?.open()
          }}
          className="flex cursor-pointer items-center justify-center text-text-secondary text-[1rem]"
        >
          <FaEye />
        </span>
      </div>
      <ReportModal ref={modalRef} reportType={reportType} />
    </>
  );
}
