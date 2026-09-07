"use client";

import { RemoveJobModalRef } from "@/types";
import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { FiTrash2, FiX } from "react-icons/fi";

interface RemoveJobModalProps {
  adminId?: string;
}

const RemoveJobModal = forwardRef<
  RemoveJobModalRef,
  RemoveJobModalProps
>(({ adminId }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log("Remove Job:", adminId);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

      <div className="w-full max-w-[400px] rounded-[10px] bg-white p-4 shadow-xl">
     
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
       
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE8E8]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF3B3B]">
                <FiTrash2
                  size={16}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>
            </div>

            <h2 className="font-inter text-[0.875rem] font-medium text-[#1D2939]">
              Remove Job
            </h2>
          </div>

   
          <button
            type="button"
            onClick={handleClose}
            className="flex h-6 w-6 cursor-pointer items-center justify-center text-[#1D2939] transition hover:opacity-70"
          >
            <FiX size={18} strokeWidth={1.8} />
          </button>
        </div>


        <div className="mt-5 flex min-h-[44px] items-center rounded-[6px] border border-[#FF3B3B] bg-[#FFE0E0] px-3">
          <p className="font-inter text-[0.75rem] font-semibold text-[#1D2939]">
            Are You Want To Remove This Job Permanently.
          </p>
        </div>

   
        <div className="mt-4 grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={handleClose}
            className="h-[36px] cursor-pointer rounded-[7px] border border-[#E4E7EC] bg-white font-inter text-[0.8125rem] font-normal text-[#344054] transition hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>

  
          <button
            type="button"
            onClick={handleConfirm}
            className="flex h-[36px] cursor-pointer items-center justify-center gap-2 rounded-[7px] border border-[#FF3B3B] bg-[#FFE0E0] font-inter text-[0.8125rem] font-normal text-[#FF3B3B] transition hover:bg-[#FFD5D5]"
          >
            Remove Job
            <FiTrash2 size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
});

RemoveJobModal.displayName = "RemoveJobModal";

export default RemoveJobModal;