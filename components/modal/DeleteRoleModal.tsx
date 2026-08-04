"use client";
import { keys } from "@/keys";
import { deleteAdmin } from "@/services/settings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

export interface DeleteRoleModalRef {
  open: () => void;
  close: () => void;
}

interface TypeAdminId {
  adminId: ParamValue;
}

const DeleteRoleModal = forwardRef<
  DeleteRoleModalRef,
  TypeAdminId
>(({ adminId }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient()

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const mutation = useMutation({
    mutationFn: deleteAdmin,
    onSuccess: () => {
      setIsOpen(false)
      queryClient.invalidateQueries({ queryKey: [keys.adminList] });
      toast.success("Admin deleted successfully");
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  const adminDeleteConfirmation = () => {
    mutation.mutate(adminId)
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
      <div className="relative w-full max-w-[624px] rounded-[1.25rem] bg-white p-8 shadow-2xl font-sans">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
        >
          <FiX className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-[3.8 rem] w-[3.8rem] items-center justify-center rounded-full bg-red-50">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-delete shadow-sm">
            <FiAlertCircle className="h-6 w-6 text-white" strokeWidth="2" />
          </div>
        </div>

        <div className="mt-6 text-center px-2 flex items-center justify-center ">
          <div className="w-full sm:w-[80%]">
            <h2 className="text-[1.35rem] font-bold text-gray-900 leading-snug">
              Are You Sure You Want To Delete <br /> The Role ?
            </h2>
            <p className="mt-3 text-[0.9rem] font-normal   leading-relaxed text-text-setting-light">
              This Admin will temporarily be removed from the system and will not have access to any of the modules or features. You can restore this admin at any time from the deleted admin's tab.
            </p>
          </div>
        </div>

        <div className="mt-7 flex items-center rounded-xl bg-bg-gray-delete border border-gray-100 border-l-[2px] border-l-orange-400 p-4 pl-2">
          <span className="text-[1rem] font-medium text-gray-600 ml-2">
            This May Affect Active Workflows Associated With This Role.
          </span>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 rounded-md border border-gray-200 bg-white py-2 text-[1rem] font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => adminDeleteConfirmation()}
            className="signout-btn"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Deleting...' : 'Delete Role'}
          </button>
        </div>
      </div>
    </div>
  );
});

DeleteRoleModal.displayName = "DeleteRoleModal";

export default DeleteRoleModal;