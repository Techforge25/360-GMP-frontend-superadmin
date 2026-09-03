"use client";

import { keys } from "@/keys";
import { activate } from "@/services/communities";
import { CommunityRef } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import { useRouter } from "next/navigation";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";

interface TypeCommunityId {
  communityId: ParamValue;
  name: string;
}

const EnableModal = forwardRef<CommunityRef, TypeCommunityId>(
  ({ communityId, name }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient()
    const router = useRouter()

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const mutation = useMutation({
      mutationFn: activate,
      onSuccess: () => {
        setIsOpen(false);
        queryClient.invalidateQueries({
          queryKey: [keys.communitiesList],
        });

        router.push("/communities");
      },
    });

    const activateAccount = () => {
      mutation.mutate(communityId)
    }

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[0.125rem] p-4 overflow-y-auto">
        <div className="relative w-full max-w-[25.75rem] rounded-[1.25rem] bg-white p-6 sm:p-5 shadow-2xl font-sans box-border">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-text-light transition-colors duration-200 cursor-pointer"
          >
            <FiX className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 pb-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-border-green shadow-sm">
              <FiCheckCircle
                className="h-[1.25rem] w-[1.25rem] text-white"
                strokeWidth={2}
              />
            </div>

            <div>
              <h2 className="text-[1.375rem] font-medium font-inter text-text-light leading-snug break-words">
                Enable Community?
              </h2>
            </div>
          </div>

          <hr className="border-border-gray-200" />

          <p className="text-text-gray-more text-[1rem] font-inter font-normal pt-5">
            This will make{" "}
            <span className="text-text-setting-light">
              {name}&nbsp;
            </span>{" "}
            visible to all users again. The community owner will be notified.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-md border border-border-gray-200 bg-white py-2 text-[1rem] font-medium text-text-light cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => {
                activateAccount()
              }}
              disabled={mutation.isPending}
              className="flex-1 border border-border-green text-border-green gap-2 rounded-[0.5rem] flex items-center justify-center py-2 bg-green-50 text-[1rem] font-inter font-normal cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{mutation.isPending ? 'Enabling...' : 'Enable'}</span>

              <FiCheckCircle className="w-[1.146rem] h-[1.146rem]" />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

EnableModal.displayName = "EnableModal";

export default EnableModal;
