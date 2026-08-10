"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { FiPower } from "react-icons/fi";

export interface SignOutModalRef {
  open: () => void;
  close: () => void;
}

interface SignOutModalProps {
  onConfirm?: () => void;
  isPending: boolean;
}

const SignOutModal = forwardRef<SignOutModalRef, SignOutModalProps>(
  ({ onConfirm, isPending }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] transition-opacity duration-300">
        <div className="w-[90%] max-w-[25rem] rounded-[1.25rem] bg-white p-6 text-center shadow-2xl transition-all duration-300 scale-100 opacity-100">
          <div className="mx-auto mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#FFEBEF]">
            <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-accent-danger text-white shadow-sm">
              <FiPower className="text-2xl stroke-[3]" />
            </div>
          </div>

          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Sign out of your Account?
          </h2>

          <p className="mb-6 px-2 text-sm leading-relaxed text-gray-500">
            Are you sure you want to log out of the{" "}
            <br className="hidden sm:block" />
            360GMP Admin Portal? You will need to re-
            <br className="hidden sm:block" />
            authenticate to access the dashboard.
          </p>

          <hr className="mb-6 border-gray-100" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="signout-btn-cancel"
            >
              No
            </button>

            <button
              onClick={onConfirm}
              disabled={isPending}
              className="signout-btn disabled:cursor-not-allowed disabled:opacity-50"
            >
              {" "}
              {isPending ? "Logging out..." : "Yes"}{" "}
            </button>
          </div>
        </div>
      </div>
    );
  },
);

SignOutModal.displayName = "SignOutModal";

export default SignOutModal;
