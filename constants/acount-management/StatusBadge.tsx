interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<string, string> = {
    "Free Trial": "bg-[#DCDCDC33] text-gray-600",
    Silver: "bg-[#FFF5EC] text-[#FF8D28]",
    Gold: "bg-[#FFF9E6] text-[#D9A300]",
    Enterprise: "bg-[#F5EEFF] text-[#9D4EDD]",
    Consumer: "bg-[#EFF5FF] text-[#2A75D3]",
    Pending: "bg-[#FFF5EC] text-[#FF8D28]",
    Approved: "bg-[#E6F6E9] text-[#0B8806]",
    Rejected: "bg-[#FFDFDF] text-[#FF383C]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-5 py-1 text-sm font-medium ${
        statusStyles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}