"use client";

import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  text?: string;
  className?: string;
}

export default function BackButtonMain({
  text = "Back",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`mb-4 inline-flex items-center gap-2 text-sm text-black transition-colors hover:text-brand-primary ${className}`}
    >
      <FiArrowLeft className="h-4 w-4" />
      {text}
    </button>
  );
}
