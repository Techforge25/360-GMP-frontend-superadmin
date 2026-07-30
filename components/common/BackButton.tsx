"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function BackButton({
  text = "Cancel",
  onClick,
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-xl border  border-[#E2E8F0] bg-white px-5 py-2.5 text-[1rem] font-medium text-black cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}