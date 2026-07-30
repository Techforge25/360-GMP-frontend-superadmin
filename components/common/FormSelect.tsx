"use client";

import React from "react";
import { Controller, Control } from "react-hook-form";
import { IoChevronDownOutline } from "react-icons/io5";

interface SelectOption {
  label: string;
  value: string;
}

interface FormSelectProps {
  name: string;
  control: Control<any>;
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
}

export default function FormSelect({
  name,
  control,
  label,
  required = false,
  placeholder = "Select...",
  options,
  className = "",
}: FormSelectProps) {
  return (
    <div className={`flex flex-col gap-[0.5rem] ${className}`}>
      {label && (
        <label className="text-[0.875rem] font-semibold text-[#1e293b]">
          {label}

          {required && (
            <span className="text-[#ff3b30]"> *</span>
          )}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <select
              {...field}
              className="w-full appearance-none px-[1rem] py-[0.75rem] bg-white border border-gray-200 rounded-[0.5rem] text-[0.9375rem] text-gray-700 focus:outline-none focus:border-[#2c0a59] transition-all cursor-pointer"
            >
              <option value="" disabled>
                {placeholder}
              </option>

              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pr-[1rem] pointer-events-none text-gray-400">
              <IoChevronDownOutline className="w-[1rem] h-[1rem]" />
            </div>
          </div>
        )}
      />
    </div>
  );
}