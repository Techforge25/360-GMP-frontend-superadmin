"use client";

import { FaShieldAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function ForbiddenPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 font-secondary">
      <div className="w-full max-w-xl rounded-2xl border border-red-100 bg-white p-10 text-center shadow-lg">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <FaShieldAlt className="text-4xl text-red-600" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          403 Forbidden
        </h1>

        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          Access Denied
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600">
          You cannot access this module. Please return to the modules assigned
          to your account or contact your administrator if you believe this is
          an error.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-brand-primary px-6 py-3 text-white transition hover:opacity-90"
          >
            <IoArrowBack className="text-lg" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}