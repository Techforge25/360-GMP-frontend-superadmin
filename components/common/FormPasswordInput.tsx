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
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black cursor-pointer"
        >
          {showPassword ? <FiEye className="w-[1.3rem] h-[1rem]" /> : <FiEyeOff className="w-[1.3rem] h-[1rem]" />}
        </button>
      </div>

      {error && <p className="text-xs  mt-3  font-normal leading-relaxed text-red-500 break-words whitespace-normal">{error.message}</p>}
    </div>
  );
}
