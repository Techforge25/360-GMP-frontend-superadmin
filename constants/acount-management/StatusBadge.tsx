interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<string, string> = {
    "Free Trial": "bg-[#DCDCDC33] text-gray-600 border-[1px] border-gray-600",
    "Bronze": "bg-[#DCDCDC33] text-gray-600 border-[1px] border-gray-600",
    Silver: "bg-[#DCDCDC33] text-gray-600 border-[1px] border-gray-600",
    Gold: "bg-[#FFF9E6] text-[#D9A300] border-[1px] border-[#D9A300]",
    'Enterprise': "bg-bg-gray-200 text-[#9D4EDD] border-[1px] border-[#9D4EDD]",
    'Consumer / Individual': "bg-[#EFF5FF] text-[#2A75D3] border-[1px] border-[#2A75D3]",
    canceled: 'bg-[#FFDFDF] text-[#FF383C] border-[1px] border-[#FF383C]',
    delivered: 'bg-[#EFF5FF] text-[#2A75D3]  border-[1px] border-[#2A75D3]',
    pending: "bg-[#FFF5EC] text-[#FF8D28] border-[1px] border-[#FF8D28]",
    approved: "bg-[#E6F6E9] text-[#0B8806] border-[1px] border-[#0B8806]",
    rejected: "bg-[#FFDFDF] text-[#FF383C] border-[1px] border-[#FF383C]",
    active: "bg-[#E6F6E9] text-[#0B8806] border-[1px] border-[#0B8806]",
    expired: "border border-gray-700 bg-gray-100 text-gray-700",
    "Past Due": "bg-[#FFDFDF] text-[#FF383C] border-[1px] border-[#FF383C]",
    failed: "bg-[#FFDFDF] text-[#FF383C] border-[1px] border-[#FF383C]",
    paid: "bg-[#E6F6E9] text-[#0B8806] border-[1px] border-[#0B8806]",
    completed: "bg-[#E6F6E9] text-[#0B8806] border-[1px] border-[#0B8806]",
    cancelled: "bg-[#FFDFDF] text-[#FF383C] border-[1px] border-[#FF383C]",
    shiped:"text-[#922cdd] bg-[#f3e8ff] border-[1px] border-[#922cdd]"
  };

  return (
    <span
      className={`inline-flex rounded-[2.375rem] px-[1.175rem] py-1 text-[0.875rem] font-normal font-inter capitalize ${statusStyles[status] || "bg-gray-100 text-gray-600"
        }`}
    >
      {status === "Consumer / Individual" ? "Consumer" : status === 'canceled' ? 'Cancelled' : status}
    </span>
  );
}