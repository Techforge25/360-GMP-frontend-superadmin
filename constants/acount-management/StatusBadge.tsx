interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<string, string> = {
    "Free Trial": "bg-[#DCDCDC33] text-gray-600",
    "Bronze": "bg-[#DCDCDC33] text-gray-600",
    Silver: "bg-[#FFF5EC] text-[#FF8D28]",
    Gold: "bg-[#FFF9E6] text-[#D9A300]",
    'Premium': "bg-[#F5EEFF] text-[#9D4EDD]",
    'Consumer / Individual': "bg-[#EFF5FF] text-[#2A75D3]",
    pending: "bg-[#FFF5EC] text-[#FF8D28]",
    approved: "bg-[#E6F6E9] text-[#0B8806]",
    rejected: "bg-[#FFDFDF] text-[#FF383C]",
    active: "bg-[#E6F6E9] text-[#0B8806]",
    expired: "bg-[#FFDFDF] text-[#FF383C]",
    "Past Due": "bg-[#FFDFDF] text-[#FF383C]",
    failed: "bg-[#FFDFDF] text-[#FF383C]",
    paid: "bg-[#E6F6E9] text-[#0B8806]",
    completed: "bg-[#E6F6E9] text-[#0B8806]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-5 py-1 text-sm font-medium capitalize ${
        statusStyles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}