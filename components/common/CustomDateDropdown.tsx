"use client";
import { useState, useRef, useEffect } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { TypeDropdownOption } from "@/types";

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: TypeDropdownOption[];
}

export default function CustomDateDropdown({
  value,
  onChange,
  options,
}: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((item) => item.value === value)?.label || "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[135px]">
      {/* Selected */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full h-[34px]
          flex items-center justify-between
          rounded-md
          bg-white
          border border-[#E5E7EB]
          px-3
          text-[0.875rem]
          font-normal
          font-inter
          text-text-primary
        "
      >
        {selectedLabel}

        {open ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
      </button>

      {open && (
        <div
          className="
            absolute
            z-50
            top-[38px]
            left-0
            w-full
            rounded-md
            bg-white
            border border-[#E5E7EB]
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
        >
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`
                w-full
                text-left
                px-3
                py-[10px]
                 text-[0.875rem]
          font-normal
          font-inter
          text-text-primary
                hover:bg-[#F5F0FF]
                border-b last:border-none border-[#E5E7EB]
                ${option.value === value ? "bg-[#F6F0FF]" : "bg-white"}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
