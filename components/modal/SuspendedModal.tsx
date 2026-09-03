"use client";
import { ParamValue } from "next/dist/server/request/params";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FiX } from "react-icons/fi";
import suspendedIcon from "@/assets/suspendedModalIcon.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { suspend } from "@/services/communities";
import { useRouter } from "next/navigation";
import { keys } from "@/keys";
export interface SuspendedModalRef {
  open: () => void;
  close: () => void;
}

interface TypeAdminId {
  communityId: ParamValue;
  name: string;
}

const SuspendedModal = forwardRef<SuspendedModalRef, TypeAdminId>(
  ({ communityId, name }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient()
    const router = useRouter()

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const mutation = useMutation({
      mutationFn: suspend,
      onSuccess: () => {
        setIsOpen(false);
        queryClient.invalidateQueries({
          queryKey: [keys.communitiesList],
        });

        router.push("/communities");
      },
    });

    const suspendAccount = () => {
      mutation.mutate(communityId)
    }

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 overflow-y-auto">
        <div className="relative w-full max-w-[25.75rem] rounded-[1.25rem] bg-white p-6 sm:p-5 shadow-2xl font-sans box-border">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-text-light  transition-colors duration-200 cursor-pointer"
          >
            <FiX className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 pb-5">
            <div className="">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-border-red-dark shadow-sm">
                <Image
                  src={suspendedIcon}
                  alt=""
                  width={100}
                  height={100}
                  className="w-[1.26rem] h-[1.089rem]"
                />
              </div>
            </div>

            <div className="">
              <h2 className="text-[1.375rem]  font-medium font-inter text-text-light leading-snug break-words capitalize">
                suspend Community?
              </h2>
            </div>
          </div>

          <hr className="border-border-gray-200 " />

          <p className="capitalize text-text-gray-more text-[1rem] font-inter font-normal pt-5">
            this will hide{" "}
            <span className="text-text-setting-light">
              {name}&nbsp;
            </span>
            from all user the community Owner will be notified
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-md border border-border-gray-200 bg-white py-2 text-[1rem] font-medium text-text-light cursor-pointer"
            >
              Cancel
            </button>

            <button onClick={() => suspendAccount()} disabled={mutation.isPending} className="flex-1 border border-border-red-dark text-border-red-dark gap-2 rounded-[0.5rem] flex items-center justify-center py-2 bg-brand-business-icon-light text-[1rem] font-inter font-normal cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
              <span>{mutation.isPending ? 'Suspending...' : 'Suspend'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  },
);

SuspendedModal.displayName = "SuspendedModal";

export default SuspendedModal;
