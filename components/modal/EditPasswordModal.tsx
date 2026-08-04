"use client";
import { keys } from "@/keys";
import {
  deleteAdmin,
  updateAdminDetails,
  updatePassword,
} from "@/services/settings";
import { EditPasswordRef, TypeUpdateAdminPassword } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import { forwardRef, useImperativeHandle, useState } from "react";
import { FiX } from "react-icons/fi";

import FormPasswordInput from "../common/FormPasswordInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePasswordSchema } from "@/validations/settingsValidations";
import PrimaryButton from "../common/PrimaryButton";

interface TypeAdminId {
  adminId: ParamValue;
  adminEmail: string;
  adminUserName: string;
}

const EditPasswordModal = forwardRef<EditPasswordRef, TypeAdminId>(
  ({ adminId, adminEmail, adminUserName }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const queryClient = useQueryClient();

    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm<TypeUpdateAdminPassword>({
      resolver: yupResolver(updatePasswordSchema),
      mode: "onChange",
      defaultValues: {
        password: "",
      },
    });

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    const mutation = useMutation({
      mutationFn: ({
        adminId,
        password,
      }: { adminId: ParamValue } & TypeUpdateAdminPassword) =>
        updatePassword(adminId, { password }),

      onSuccess: () => {
        setIsOpen(false);
        queryClient.invalidateQueries({
          queryKey: [keys.adminList],
        });
      },
    });

    const onSubmit = async (data: TypeUpdateAdminPassword) => {
      mutation.mutate({
        adminId,
        password: data?.password,
      });
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="relative w-full max-w-[500px] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl font-sans box-border">
          <div className="flex justify-between items-start mb-6 gap-4">
            <div className="overflow-hidden">
              <h2 className="text-[1.375rem] text-left font-semibold text-gray-900 mb-1">
                Change Password
              </h2>
              <div className="w-full">
                <p className="text-sm text-left text-gray-600 break-words whitespace-normal leading-relaxed">
                  Assign a new password on behalf of this admin to secure their
                  account access.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer mt-1 shrink-0"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          <div className="h-px bg-gray-100 mb-6"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4 bg-white text-left overflow-hidden">
              <p className="text-[1rem] text-text-light font-medium capitalize break-words">
                {adminUserName}
              </p>
              <p className="text-[1rem] text-slate-500 font-normal break-all">
                {adminEmail}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 bg-white">
              <FormPasswordInput
                label="Password"
                name="password"
                register={register}
                error={errors?.password}
              />
            </div>

            <div className="pt-4">
              <PrimaryButton
                className="w-full"
                type="submit"
                text={mutation.isPending ? "Updating..." : "Update Password"}
                disabledKey={mutation.isPending || !isValid}
              />
            </div>
          </form>
        </div>
      </div>
    );
  },
);

EditPasswordModal.displayName = "EditPasswordModal";

export default EditPasswordModal;
