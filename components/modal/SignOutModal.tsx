import React from "react";
import { FiPower } from "react-icons/fi";

interface SignOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const SignOutModal: React.FC<SignOutModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
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
          Sign Out Account
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
            onClick={onClose}
            className="flex-1 cursor-pointer rounded-xl border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 cursor-pointer rounded-xl bg-accent-danger py-3 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-accent-danger-light"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
