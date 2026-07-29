"use client";

import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

import RoleConfigurationForm from "./RoleConfigurationForm";
import PermissionMatrix from "./PermissionMatrix";
import { initialModules } from "@/constants/roles/permissions";
import { FormValues } from "@/types";
import PrimaryButton from "@/components/common/PrimaryButton";
import BackButton from "@/components/common/BackButton";
import BackButtonMain from "@/components/common/BackButtonMain";

export default function CreateRoleForm() {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      allowedModules: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <BackButtonMain text="Back" />

        <h1 className="text-[1.375rem] font-semibold text-brand-primary">
          Create New Role
        </h1>

        <p className="mt-1 text-sm text-brand-rating-text-border">
          Define specialized permissions for team members to manage mobility
          workflows.
        </p>
      </div>

      <RoleConfigurationForm register={register} errors={errors} />

      <PermissionMatrix control={control} modules={initialModules} />

      <div className="flex items-center gap-3 pt-2">
        <BackButton text="Cancel" />

        <PrimaryButton
          type="submit"
          text="Send Invitation"
          route="/settings/invite-admin"
        />
      </div>
    </form>
  );
}
