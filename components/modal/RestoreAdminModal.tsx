"use client";
import { keys } from "@/keys";
import { restoreAdmin } from "@/services/settings";
import { RestoreAdminModalRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import PrimaryButton from "../common/PrimaryButton";

interface TypeAdminId {
  adminId: ParamValue;
}

const RestoreAdminModal = forwardRef<RestoreAdminModalRef, TypeAdminId>(
  ({ adminId }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient();

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const mutation = useMutation({
      mutationFn: restoreAdmin,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [keys.adminList] });
        toast.success("Admin restored successfully");
        setIsOpen(false); // Modal close on success
      },
    });

    const handleRestoreAdmin = () => {
      mutation.mutate(adminId);
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 overflow-y-auto">
        <div className="relative w-full max-w-[624px] rounded-[1.25rem] bg-white p-6 sm:p-8 shadow-2xl font-sans box-border">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
          >
            <FiX className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full bg-dark-blue-200 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary shadow-sm">
              <FiAlertCircle className="h-6 w-6 text-white" strokeWidth="2" />
            </div>
          </div>

          <div className="mt-6 text-center px-2 w-full overflow-hidden">
            <div className="w-full max-w-[500px] mx-auto overflow-hidden">
              <h2 className="text-[1.35rem] font-bold text-gray-900 leading-snug break-words">
                Are You Sure You Want To Restore This Admin?
              </h2>
              <p className="mt-3 text-[0.9rem] font-normal leading-relaxed text-text-setting-light break-words whitespace-normal">
                Restoring this admin will instantly restore their system access, including all previously assigned roles, permissions, and active workflows. They will be able to log in and manage their account right away.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-gray-200 bg-white py-2 text-[1rem] font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer w-full"
            >
              Cancel
            </button>
            <PrimaryButton
              text={mutation.isPending ? "Restoring..." : "Restore Admin"}
              className="w-full"
              onClick={() => handleRestoreAdmin()}
              disabledKey={mutation.isPending}
            />
          </div>
        </div>
      </div>
    );
  },
);

RestoreAdminModal.displayName = "RestoreAdminModal";

export default RestoreAdminModal;