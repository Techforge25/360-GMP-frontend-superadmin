"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import RoleConfigurationForm from "./RoleConfigurationForm";
import PermissionMatrix from "./PermissionMatrix";
import { initialModules } from "@/constants/roles/permissions";
import { AdminInviteSentRef, FormValues, TypeUpdateAdmin } from "@/types";
import PrimaryButton from "@/components/common/PrimaryButton";
import BackButton from "@/components/common/BackButton";
import BackButtonMain from "@/components/common/BackButtonMain";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createAdmin,
  getSingleAdminDetails,
  updateAdminDetails,
} from "@/services/settings";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createAdminSchema,
  updateAdminSchema,
} from "@/validations/settingsValidations";
import { keys } from "@/keys";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AdminInviteSent from "@/components/modal/AdminInviteSent";

type Props = {
  adminId?: ParamValue;
};

export default function CreateRoleForm({ adminId }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter()
  const [adminDefaultValues, setAdminDefaultValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
    allowedModules: [],
  });
  const adminInviteSentModalRef = useRef<AdminInviteSentRef>(null);
  const checkValidationRequest = adminId
    ? updateAdminSchema
    : createAdminSchema;
  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormValues | TypeUpdateAdmin>({
    resolver: yupResolver(checkValidationRequest),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      allowedModules: [],
    },
  });

  const { data } = useQuery({
    queryKey: [keys.adminDetails],
    queryFn: () => getSingleAdminDetails(adminId),
    enabled: !!adminId,
    staleTime: 0,
  });

  useEffect(() => {
    if (!data?.data) return;
    if (adminId) {
      reset({
        username: data?.data?.username ?? "",
        email: data?.data?.email ?? "",
        password: "",
        allowedModules: data?.data?.allowedModules ?? [],
      });
    }

  }, [data, reset]);

  const mutation = useMutation({
    mutationFn: createAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keys.adminList] });
      setAdminDefaultValues(getValues() as FormValues);

      adminInviteSentModalRef.current?.open();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      adminId,
      username,
      allowedModules,
    }: { adminId: ParamValue } & TypeUpdateAdmin) =>
      updateAdminDetails(adminId, {
        username,
        allowedModules,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keys.adminList] });
       setAdminDefaultValues(getValues() as FormValues);

      adminInviteSentModalRef.current?.open();
      toast.success("Admin updated successfully");
    },
  });

  const onSubmit = (data: FormValues | TypeUpdateAdmin) => {
    if (adminId) {
      updateMutation.mutate({
        adminId,
        username: data.username,
        allowedModules: data.allowedModules,
      });
    } else {
      const createData = data as FormValues;
      mutation.mutate({
        username: createData.username,
        email: createData.email,
        password: createData.password,
        allowedModules: createData.allowedModules,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <BackButtonMain text="Back" />

          <h1 className="text-[1.375rem] font-semibold text-brand-primary">
           {adminId ? "Update Role & Permissions" : "Create New Role"}
          </h1>

          <p className="mt-1 text-sm text-brand-rating-text-border">
            {adminId ? "Modify the role details and permissions assigned to this role." :"Define specialized permissions for team members to manage mobility workflows."} 
          </p>
        </div>

        <RoleConfigurationForm
          register={register}
          errors={errors}
          adminId={adminId}
        />
        <PermissionMatrix control={control} modules={initialModules} />
        <div className="flex items-center gap-3 pt-2">
          <BackButton text="Cancel" />
          <PrimaryButton
            type="submit"
            text={
              adminId
                ? updateMutation.isPending
                  ? "Updating..."
                  : "Update Invitation"
                : mutation.isPending
                  ? "Sending Invitation..."
                  : "Send Invitation"
            }
            disabledKey={!isValid}
          />
        </div>
      </form>
      <AdminInviteSent
        ref={adminInviteSentModalRef}
        defaultValues={adminDefaultValues}
      />
    </>
  );
}
