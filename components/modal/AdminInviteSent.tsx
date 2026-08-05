"use client";
import { AdminInviteSentRef } from "@/types";
import { forwardRef, useImperativeHandle, useState } from "react";

import { HiChevronRight } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Inviteicon from "@/assets/inviteicon.svg";
interface TypeAdminValues {
  defaultValues: {
    username: string;
    email: string;
    password: string;
    allowedModules: string[];
  };
}

const AdminInviteSent = forwardRef<AdminInviteSentRef, TypeAdminValues>(
  ({ defaultValues }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const handleNavigate = () => {
      router.push("/settings");
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-[1rem] font-['Inter',sans-serif]">
        <div className="relative w-full max-w-[32rem] rounded-[1.25rem] bg-white p-[1.75rem] shadow-2xl transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="mb-[1.25rem] flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-[#EAE0FB]">
              <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B066FE] text-white shadow-sm">
                <Image src={Inviteicon} alt="Icon" width={20} height={20} />
              </div>
            </div>

            <h2 className="text-[1.375rem] font-medium tracking-tight text-gray-900">
              Invitation Sent Successfully
            </h2>

            <p className="mt-[0.625rem] text-[0.875rem] font-regular leading-[1.35rem] text-gray-500 ">
              An Invitation Email Has Been Sent To{" "}
              <span className="text-[#3B82F6] font-normal">
                {defaultValues?.email}
              </span>{" "}
              With Instructions To Set Up Their Account As A Admin.
            </p>

            <div className="mt-[1.5rem] w-full rounded-[0.875rem] bg-[#F8F9FA] p-[1.25rem] text-left border border-gray-100">
              <h3 className="text-[1rem] font-medium text-gray-900 pb-[0.75rem] border-b border-gray-200/70">
                Invitation Summary
              </h3>

              <div className="mt-[1rem] grid grid-cols-2 gap-y-[1.125rem] gap-x-[1rem]">
                <div>
                  <p className="text-[0.875rem] font-normal text-gray-500">
                    User Name
                  </p>
                  <p className="mt-[0.25rem] text-[1rem] font-semibold text-gray-900">
                    {defaultValues?.username}
                  </p>
                </div>

                <div>
                  <p className="text-[0.875rem] font-normal text-gray-500">
                    Email Address
                  </p>
                  <p className="mt-[0.25rem] text-[1rem] truncate font-semibold text-gray-900">
                    {defaultValues?.email}
                  </p>
                </div>

                <div className="col-span-2">
                  <p className="text-[0.875rem] font-normal text-gray-500">
                    Assign Module
                  </p>
                  <p className="mt-[0.25rem] text-[1rem] font-semibold text-gray-900">
                    {defaultValues?.allowedModules?.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleNavigate}
              type="button"
              className="invite-btn"
            >
              <span>Go To Role Access Control</span>
              <HiChevronRight className="h-[1.125rem] w-[1.125rem] text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

AdminInviteSent.displayName = "AdminInviteSent";

export default AdminInviteSent;
