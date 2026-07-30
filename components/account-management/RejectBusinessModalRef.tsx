"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";

export interface RejectBusinessModalRef {
  open: () => void;
  close: () => void;
}

interface RejectBusinessModalProps {
  onConfirm?: (reason: string, notes: string) => void;
}

const RejectBusinessModal = forwardRef<
  RejectBusinessModalRef,
  RejectBusinessModalProps
>(({ onConfirm }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(reason, notes);
    } else {
      alert(
        `Rejected with reason: ${reason || "None selected"}, Notes: ${notes}`,
      );
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-[1rem] font-sans">
      <div className="relative w-full max-w-[42rem] bg-white rounded-[1rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-[1.75rem] py-[1.25rem] border-b border-gray-100">
          <div className="flex items-center gap-[0.75rem]">
            <div className="flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-[#ffebee] rounded-full text-[#ff3b30]">
              <MdErrorOutline className="w-[1.25rem] h-[1.25rem]" />
            </div>
            <h2 className="text-[1.125rem] font-bold text-gray-900">
              Reject Business Profile
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-[0.25rem] rounded-[0.375rem] cursor-pointer"
          >
            <IoCloseOutline className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </div>

        <div className="p-[1.75rem] flex flex-col gap-[1.5rem]">
          <p className="text-[0.875rem] text-[#64748b] leading-[1.375rem]">
            Please select a reason for rejecting this profile. This information
            will be shared with business to help them resolve the issue.
          </p>

          <div className="flex flex-col gap-[0.5rem]">
            <label className="text-[0.875rem] font-semibold text-[#1e293b]">
              Reason For Rejection <span className="text-[#ff3b30]">*</span>
            </label>
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full appearance-none px-[1rem] py-[0.75rem] bg-white border border-gray-200 rounded-[0.5rem] text-[0.9375rem] text-gray-700 focus:outline-none focus:border-[#2c0a59] transition-all cursor-pointer"
              >
                <option value="" disabled>
                  Select a reason..
                </option>
                <option value="Incorrect Documentation">
                  Incorrect Documentation
                </option>
                <option value="Invalid Business Details">
                  Invalid Business Details
                </option>
                <option value="Compliance Failure">Compliance Failure</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-[1rem] pointer-events-none text-gray-400">
                <IoChevronDownOutline className="w-[1rem] h-[1rem]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label className="text-[0.875rem] font-semibold text-[#1e293b]">
              Additional Notes{" "}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="provide specific details regarding the rejection to assist the merchant."
              className="w-full p-[1rem] bg-white border border-gray-200 rounded-[0.5rem] text-[0.9375rem] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#2c0a59] transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-[1rem] px-[1.75rem] py-[1.25rem] border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={() => setIsOpen(false)}
            className="px-[1.75rem] py-[0.625rem] bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-[0.9375rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="flex items-center justify-center gap-[0.5rem] px-[1.75rem] py-[0.625rem] bg-[#ff3b30] hover:bg-[#e0342b] text-white font-semibold text-[0.9375rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
          >
            <span>Confirm Rejection</span>
            <FiCheck className="w-[1.125rem] h-[1.125rem]" />
          </button>
        </div>
      </div>
    </div>
  );
});

RejectBusinessModal.displayName = "RejectBusinessModal";

export default RejectBusinessModal;
