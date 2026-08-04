import React from "react";

interface CustomLineTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number | string;
  }>;
  label?: string;
}

const CustomLineTooltip: React.FC<CustomLineTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#e2e8f0] p-[0.75rem] rounded-[0.375rem] shadow-md">
        <p className="text-[#64748b] text-[0.875rem] mb-[0.25rem]">
          {label}
        </p>

        <p className="text-[#845ef7] text-[0.875rem] font-medium">
          Platform Revenue : {Number(payload[0].value).toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomLineTooltip;