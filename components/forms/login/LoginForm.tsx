"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import FormInput from "@/components/common/FormInput";
import FormPasswordInput from "@/components/common/FormPasswordInput";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
      <FormInput
        label="Username"
        name="username"
        placeholder="John Doe"
        register={register}
        error={errors.username}
      />

      <FormPasswordInput
        label="Password"
        name="password"
        register={register}
        error={errors.password}
      />

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Sign In
      </button>
    </form>
  );
}