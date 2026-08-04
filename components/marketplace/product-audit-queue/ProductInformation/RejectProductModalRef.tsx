"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import { RejectProductModalRef } from "@/types";
import { IoMdClose } from "react-icons/io";

interface RejectProductModalProps {
  onConfirm?: (notes: string) => void;
}

const RejectProductModal = forwardRef<
  RejectProductModalRef,
  RejectProductModalProps
>(({ onConfirm }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const notesRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const handleConfirm = () => {
    const notes = notesRef.current?.value || "";

    onConfirm?.(notes);

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-[1rem] font-sans">
      <div className="relative w-full max-w-[42rem] bg-white rounded-[1rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-[1.75rem] py-[1.25rem] border-b border-gray-100">
          <div className="flex items-center gap-[0.75rem]  ">
            <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem]   rounded-full bg-reject text-reject">
              <IoMdClose  className="w-[1rem] h-[1rem] bg-white rounded-full" />
            </div>

            <h2 className="text-[1.125rem] font-bold text-gray-900">
              Reject Payout Request
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 p-[0.25rem] rounded-[0.375rem] cursor-pointer"
          >
            <IoCloseOutline className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>

        <div className="p-[1.75rem] flex flex-col gap-[1.5rem]">
          <p className="text-[0.875rem] text-kyc-text-heading leading-[1.375rem]">
            Please select a reason for rejecting this Product. This information
            will be shared wit merchant to help them resolve the issue.
          </p>

          <div className="flex flex-col gap-[0.5rem]">
            <label className="text-[0.875rem] font-semibold text-kyc-text-subheading">
              Additional Notes{" "}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </label>

            <textarea
              ref={notesRef}
              rows={4}
              placeholder="provide specific details regarding the rejection to assist the merchant."
              className="text-area"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-[1rem] px-[1.75rem] py-[1.25rem] border-t border-gray-100 bg-gray-50/50">
          <button onClick={() => setIsOpen(false)} className="reject-btn">
            Cancel
          </button>

          <button onClick={handleConfirm} className="confirm-reject">
            <span>Confirm Rejection</span>
            <span className="text-reject rounded-full bg-white px-1 py-1">
               <FiCheck className="w-[0.7rem] h-[0.7rem]" />
            </span>
           
          </button>
        </div>
      </div>
    </div>
  );
});

RejectProductModal.displayName = "RejectProductModal";

export default RejectProductModal;
