"use client";
import { FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-surface border-b border-border-light flex items-center justify-end px-6 font-secondary select-none">
      <div className="flex items-center">
        <button className="relative w-11 h-11 rounded-full border border-border-light flex items-center justify-center text-brand-primary hover:bg-surface-muted transition-colors duration-200">
          <FiBell className="w-[22px] h-[22px]" />
          <span className="absolute top-[11px] right-[12px] w-[6px] h-[6px] bg-brand-primary-light rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
