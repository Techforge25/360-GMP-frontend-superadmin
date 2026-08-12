"use client";
import { useRef, useState } from "react";
import { ReportModalRef, ReportType } from "@/types";
import { FaEye } from "react-icons/fa6";
// import ReportModal from "./ReportModal";
import dynamic from "next/dynamic";

interface ReportActionButtonsProps {
  ReportId: string;
  reportType: ReportType;
  reportModal: 'Business' | 'Community' | 'Job' | 'Product';
}

const ReportModal = dynamic(() => import('./ReportModal'), {
  ssr: false,
});

export default function ReportActionButtons({
  ReportId,
  reportType,
  reportModal,
}: ReportActionButtonsProps) {
  const modalRef = useRef<ReportModalRef>(null);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="flex justify-start items-center gap-[1rem] font-sans p-4">
        <span
          onClick={() => {
            setIsOpen(true)
          }}
          className="flex cursor-pointer items-center justify-center text-text-secondary text-[1rem]"
        >
          <FaEye />
        </span>
      </div>
      {isOpen && (
        <ReportModal isOpen={isOpen} ReportId={ReportId} ref={modalRef} reportType={reportType} reportModal={reportModal} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
