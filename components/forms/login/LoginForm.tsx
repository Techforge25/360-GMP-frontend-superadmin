"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormInput from "@/components/common/FormInput";
import FormPasswordInput from "@/components/common/FormPasswordInput";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Email Address"
        name="username"
        placeholder="Jane.Doe@360gmp.Com"
        register={register}
        error={errors.username}
      />

      <FormPasswordInput
        label="Password"
        name="password"
        register={register}
        error={errors.password}
      />

      {errors.password && (
        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl shadow-lg text-sm font-bold text-white bg-brand-primary hover:bg-brand-primary-medium transition-all cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
}
