"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  useForm,
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
  isRequired?: boolean;
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
    <div className="space-y-2 text-left">
      <label className="text-[14px] font-semibold text-black text-left w-full pb-2">{label}</label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
          className="form-password placeholder:text-gray-300"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
        >
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>

      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
