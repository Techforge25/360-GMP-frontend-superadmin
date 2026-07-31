'use client'
import FormInput from "@/components/common/FormInput";
import FormPasswordInput from "@/components/common/FormPasswordInput";
import { ParamValue } from "next/dist/server/request/params";

interface Props {
  register: any;
  errors: any;
  adminId: ParamValue
}

export default function RoleConfigurationForm({ register, errors, adminId }: Props) {
  return (
    <div className="space-y-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <h2 className="text-[1.375rem] font-medium text-black">
        Role Configuration
      </h2>

      <div className="space-y-5">
        <FormInput
          label="User Name"
          name="username"
          placeholder="e.g zaid@123"
          register={register}
          error={errors.username}
          isRequired={true}
        />

        <FormInput
          label="Email Address"
          name="email"
          placeholder="example@gmail.com"
          register={register}
          error={errors.email}
          isRequired={true}
          adminId={adminId}
        />

        <FormPasswordInput
          label="Password"
          name="password"
          register={register}
          error={errors.password}
          isRequired={true}
        />
      </div>
    </div>
  );
}