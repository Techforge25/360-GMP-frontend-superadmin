import LoginForm from "@/components/forms/login/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div
      className="
        relative flex min-h-screen w-full items-center justify-center overflow-hidden
        bg-[url('/images/background.png')]
        bg-cover bg-center bg-no-repeat
        px-4 py-8
      "
    >
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
        <div className="flex h-12 w-32 items-center justify-center rounded-xl bg-white p-3 shadow-md sm:h-14 sm:w-40 lg:h-16 lg:w-48">
          <Image
            src="/images/Logo.svg"
            alt="3SIXTY Logo"
            width={150}
            height={50}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:max-w-lg sm:p-8 lg:max-w-xl lg:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-md sm:text-xl font-semibold uppercase text-gray-900 sm:text-2xl lg:text-3xl">
            Welcome to 360GMP Admin
          </h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}