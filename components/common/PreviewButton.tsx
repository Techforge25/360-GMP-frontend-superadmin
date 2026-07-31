import { IoShieldCheckmarkOutline } from "react-icons/io5";

interface PreviewButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
}

export default function PreviewButton({
  onClick,
  text = "Preview",
  className = "",
}: PreviewButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg border border-border-btn-green bg-bg-green-light px-5 py-1.5 text-border-btn-green transition-colors text-md font-medium hover:bg-[#D8F2DD] cursor-pointer ${className}`}
    >
      {text}
      <IoShieldCheckmarkOutline className="h-5 w-5 font-medium" />
    </button>
  );
}