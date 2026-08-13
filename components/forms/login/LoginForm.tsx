"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormInput from "@/components/common/FormInput";
import FormPasswordInput from "@/components/common/FormPasswordInput";
import { checkStatus, login } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { TypeLoginForm } from "@/types";
import { useLayoutEffect } from "react";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
  } = useForm<TypeLoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useLayoutEffect(() => {
    const checkAuthStatus = async () => {
      const res = await checkStatus()
      if (res?.data?.isLoggedIn) {
        router.replace(res?.data?.role === 'superAdmin' ? '/dashboard' : `${res?.data?.allowedModules[0]?.url}`)
      } else {
        console.log('unauthenticated')
        router.replace('/')
      }
    }
    checkAuthStatus()
  }, [])

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      router.push(data?.data?.role === 'admin' ? `${data?.data?.allowedModules[0]?.url}` : `/dashboard`)
    },
  })

  const onSubmit = (data: TypeLoginForm) => {
    mutation.mutate({
      username: data?.username,
      password: data?.password
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
      <FormInput
        label="Username"
        name="username"
        placeholder="John Doe"
        register={register}
      />

      <FormPasswordInput
        label="Password"
        name="password"
        register={register}
      />

      <button
        type="submit"
        disabled={!watch('username') || !watch('password') || mutation.isPending}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
}