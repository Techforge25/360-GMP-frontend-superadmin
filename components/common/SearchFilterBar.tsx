"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FilterOption {
  key: string;
  label: string;
  options: string[];
  defaultValue?: string;
}

interface Props {
  placeholder?: string;
  filters?: FilterOption[];
  debounceTime?: number;
  onSearch?: (value: string) => void;
  onFilterChange?: (key: string, value: string) => void;
}

type FormValues = Record<string, string>;

export default function SearchFilterBar({
  placeholder = "Search...",
  filters = [],
  debounceTime = 500,
  onSearch,
  onFilterChange,
}: Props) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const defaultValues: FormValues = {
    search: "",
    ...Object.fromEntries(
      filters.map((filter) => [
        filter.key,
        filter.defaultValue || filter.options[0] || "",
      ])
    ),
  };

  const { register, watch, control } = useForm<FormValues>({
    defaultValues,
  });

  const searchValue = watch("search");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(searchValue || "");
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [searchValue, debounceTime, onSearch]);

  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/* Search */}
      <div className="relative w-full max-w-[24.25rem]">
        <FiSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#768299]" />

        <input
          {...register("search")}
          placeholder={placeholder}
          className="search-filter"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        {filters.map((filter) => (
          <Controller
            key={filter.key}
            name={filter.key}
            control={control}
            render={({ field }) => (
              <div className="relative w-[10.625rem]">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === filter.key ? null : filter.key
                    )
                  }
                  className="flex h-[2.75rem] w-full items-center justify-between rounded-lg border border-[#D7DFEC] bg-white px-4 text-sm font-medium text-[#111827]"
                >
                  <span>{field.value}</span>

                  {openDropdown === filter.key ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>

                {openDropdown === filter.key && (
                  <div className="absolute top-[3rem] z-50 w-full overflow-hidden rounded-lg border border-[#E2E8F0] bg-white shadow-lg">
                    {filter.options.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          field.onChange(item);
                          onFilterChange?.(filter.key, item);
                          setOpenDropdown(null);
                        }}
                        className={`flex w-full items-center border-b border-[#E2E8F0] px-4 py-3 text-left text-sm last:border-none hover:bg-[#F8F5FF] ${
                          field.value === item
                            ? "bg-[#F8F5FF] text-[#35126F]"
                            : "bg-white text-[#111827]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
}