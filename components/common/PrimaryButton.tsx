"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  text: string;
  icon?: ReactNode;
  route?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabledKey?: boolean;
}

export default function PrimaryButton({
  text,
  icon,
  route,
  onClick,
  type = "button",
  className = "",
  disabledKey,
}: PrimaryButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
      return;
    }

    onClick?.();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabledKey}
      className={`btn-primary   xl:text-[1rem] ${className}`}
    >
      {icon && <span className="btn-primary-icon">{icon}</span>}

      <span>{text}</span>
    </button>
  );
}