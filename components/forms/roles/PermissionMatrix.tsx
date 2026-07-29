"use client";

import { Controller, Control } from "react-hook-form";
import { FormValues, PermissionModule } from "@/types";


interface Props {
  modules: PermissionModule[];
  control: Control<FormValues>;
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
        render={({ field }) => (
          <div className="divide-y divide-[#E2E8F0]">
            {modules.map((mod) => {
              const checked = field.value.includes(mod.name);

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
                      const updatedModules = checked
                        ? field.value.filter((item) => item !== mod.name)
                        : [...field.value, mod.name];

                      field.onChange(updatedModules);
                    }}
                    className="h-5 w-5 accent-[#0066FF]"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
    </div>
  );
}
