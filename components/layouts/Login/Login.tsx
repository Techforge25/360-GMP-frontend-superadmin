"use client";

import React, { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative bg-black overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-brand-primary/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center justify-center mb-5 ">
           <Image src="/images/logo.svg" alt="Logo" width={150} height={150}  />
          </div> */}

          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>

          <p className="text-gray-500 mt-2 text-sm">Secure dashboard access</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>

              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                {...register("email")}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl bg-gray-50 text-gray-900 sm:text-sm outline-none transition-colors ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-brand-primary focus:border-brand-primary"
                }`}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-400" />
              </div>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                className={`block w-full pl-10 pr-12 py-3 border rounded-xl bg-gray-50 text-gray-900 sm:text-sm outline-none transition-colors ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-brand-primary focus:border-brand-primary"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-brand-primary transition-colors"
              >
                {showPassword ? (
                  <FiEye className="h-5 w-5" />
                ) : (
                  <FiEyeOff className="h-5 w-5" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded accent-brand-primary"
              />

              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-brand-primary hover:bg-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
