"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { PermissionModule } from "@/types";
import FormInput from "@/components/common/FormInput";
import FormPasswordInput from "@/components/common/FormPasswordInput";

const initialModules: PermissionModule[] = [
  { id: "m1", name: "Dashboard Overview", checked: true },
  { id: "m2", name: "User Management", checked: false },
  { id: "m3", name: "Subscription & Access", checked: false },
  { id: "m4", name: "Marketplace & order logs", checked: false },
  { id: "m5", name: "Financial Hub", checked: false },
  { id: "m6", name: "Communities & Networking", checked: false },
  { id: "m7", name: "Recruitment (Job Board)", checked: false },
];

export default function CreateRoleForm() {
  const router = useRouter();

  const [modules, setModules] = useState<PermissionModule[]>(initialModules);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    const payload = {
      ...data,
      permissions: modules,
    };

    console.log(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 inline-flex items-center gap-2 text-sm font-normal text-black transition-colors hover:text-[#1E1B4B]"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back
        </button>

        <h1 className="text-[1.375rem] font-semibold text-brand-primary">
          Create New Role
        </h1>

        <p className="mt-1 text-sm text-brand-rating-text-border">
          Define specialized permissions for team members to manage mobility
          workflows.
        </p>
      </div>

      <div className="space-y-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <h2 className="text-[1.375rem] font-medium text-black">
          Role Configuration
        </h2>

        <div className="space-y-5">
          <FormInput
            label="User Name"
            name="name"
            placeholder="e.g john doe"
            register={register}
            error={errors.name}
          />

          <FormInput
            label="Email Address"
            name="email"
            placeholder="Jane.Doe@360gmp.Com"
            register={register}
            error={errors.email}
          />

          <FormPasswordInput
            label="Password"
            name="password"
            register={register}
            error={errors.password}
          />
        </div>
      </div>

      {/* Permissions */}

      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
        <div className="border-b border-[#E2E8F0] bg-setting-background px-6 py-4">
          <h3 className="text-[1.125rem] font-bold tracking-wider text-text-secondary uppercase">
            Access Permissions Matrix
          </h3>
        </div>

        <div className="border-b border-[#E2E8F0] bg-setting-invite-background px-6 py-3">
          <span className="text-[1rem] font-bold text-text-dark">
            Module Name
          </span>
        </div>

        <div className="divide-y divide-[#E2E8F0]">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="flex items-center justify-between bg-white px-6 py-4 transition hover:bg-[#F8FAFC]"
            >
              <span className="text-[1rem] font-medium text-text-dark">
                {mod.name}
              </span>

              <input
                type="checkbox"
                checked={mod.checked}
                onChange={() =>
                  setModules((prev) =>
                    prev.map((item) =>
                      item.id === mod.id
                        ? {
                            ...item,
                            checked: !item.checked,
                          }
                        : item,
                    ),
                  )
                }
                className="h-5 w-5 accent-[#0066FF]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="cursor-pointer rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-[1rem] font-medium text-black"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-brand-primary px-5 py-2.5 text-[1rem] font-medium text-white"
        >
          Send Invitation
        </button>
      </div>
    </form>
  );
}
