"use client";

import { Controller, Control } from "react-hook-form";
import { FormValues, PermissionModule, TypeUpdateAdmin } from "@/types";


interface Props {
  modules: PermissionModule[];
  control: Control<FormValues> | any;
}

export default function PermissionMatrix({ modules, control }: Props) {
  return (
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

      <Controller
        name="allowedModules"
        control={control}
        render={({ field }) => {
          const selectedModules = field.value ?? [];
          return (
            <div className="divide-y divide-[#E2E8F0]">
              {modules.map((mod) => {
                const checked = selectedModules.includes(mod.name);

                return (
                  <div
                    key={mod.id}
                    className="flex items-center justify-between bg-white px-6 py-4 transition hover:bg-[#F8FAFC]"
                  >
                    <span className="text-[1rem] font-medium text-text-dark">
                      {mod.name}
                    </span>

                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        field.onChange(
                          checked
                            ? selectedModules.filter(
                              (item: string) => item !== mod.name
                            )
                            : [...selectedModules, mod.name]
                        );
                      }}
                      className="h-5 w-5 accent-[#0066FF] cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          );
        }}
      />
    </div>
  );
}
