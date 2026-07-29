"use client";

import { useState } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface FormPasswordInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  disabled?: boolean;
}

export default function FormPasswordInput<T extends FieldValues>({
  label,
  name,
  register,
  error,
  placeholder = "••••••••",
  disabled = false,
}: FormPasswordInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-[14px] font-semibold text-black">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
          className="w-full rounded-xl text-black border border-[#E2E8F0] bg-white px-4 py-3 pr-12 text-sm tracking-widest placeholder:text-black focus:border-[#1E1B4B] focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/10 disabled:cursor-not-allowed disabled:bg-gray-100"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
        >
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>

      {error && (
        <p className="text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
}