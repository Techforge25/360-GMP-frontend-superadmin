import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

export interface FilterFormValues {
  status: string;
  dateRange: string;
}

interface NewBusinessesHeaderProps {
  onFilterChange?: (data: FilterFormValues) => void;
}

export default function NewBusinessesHeader({
  onFilterChange,
}: NewBusinessesHeaderProps) {
  const { control, watch } = useForm<FilterFormValues>({
    defaultValues: {
      status: "Status",
      dateRange: "Last 7 Days",
    },
  });

  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);
  const [isDateOpen, setIsDateOpen] = useState<boolean>(false);

  const statusRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const statusOptions = ["Approve", "Reject", "Pending"];
  const dateOptions = ["Last 7 Days", "Last 6 Month", "Last 1 Year"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target as Node)
      ) {
        setIsStatusOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const watchedValues = watch();
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(watchedValues);
    }
  }, [watchedValues, onFilterChange]);

  return (
    <div className="w-full bg-white px-4 py-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
          New Businesses Created
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-[1rem] text-text-setting-dark font-normal">
            Sort By
          </span>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <div className="relative" ref={statusRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsStatusOpen((prev) => !prev);
                    setIsDateOpen(false);
                  }}
                  className="flex items-center justify-between gap-6 min-w-[120px] px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-normal text-gray-800 shadow-sm hover:border-gray-300 transition-colors focus:outline-none"
                >
                  <span>{field.value}</span>
                  {isStatusOpen ? (
                    <HiChevronUp className="h-4 w-4 text-gray-800" />
                  ) : (
                    <HiChevronDown className="h-4 w-4 text-gray-800" />
                  )}
                </button>

                {isStatusOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-full min-w-[130px] bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-30 overflow-hidden">
                    {statusOptions.map((option) => {
                      const isActive = field.value === option;
                      return (
                        <div
                          key={option}
                          onClick={() => {
                            field.onChange(option);
                            setIsStatusOpen(false);
                          }}
                          className={`px-4 py-2.5 text-sm font-normal cursor-pointer transition-colors ${
                            isActive
                              ? "bg-[#FAF5FF] text-gray-900"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          {option}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          />

          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <div className="relative" ref={dateRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsDateOpen((prev) => !prev);
                    setIsStatusOpen(false);
                  }}
                  className="flex items-center justify-between gap-6 min-w-[130px] px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-normal text-gray-800 shadow-sm hover:border-gray-300 transition-colors focus:outline-none"
                >
                  <span>{field.value}</span>
                  {isDateOpen ? (
                    <HiChevronUp className="h-4 w-4 text-gray-800" />
                  ) : (
                    <HiChevronDown className="h-4 w-4 text-gray-800" />
                  )}
                </button>

                {isDateOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-full min-w-[140px] bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-30 overflow-hidden">
                    {dateOptions.map((option) => {
                      const isActive = field.value === option;
                      return (
                        <div
                          key={option}
                          onClick={() => {
                            field.onChange(option);
                            setIsDateOpen(false);
                          }}
                          className={`px-4 py-2.5 text-sm font-normal cursor-pointer transition-colors ${
                            isActive
                              ? "bg-[#FAF5FF] text-gray-900"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          {option}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
