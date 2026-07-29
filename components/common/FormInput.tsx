"use client";

import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
}

export default function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  error,
  placeholder,
  type = "text",
  disabled = false,
}: FormInputProps<T>) {
  return (
    <div className="space-y-2">
      <label className="text-[14px] font-semibold text-black">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className="form-input"
      />

      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
