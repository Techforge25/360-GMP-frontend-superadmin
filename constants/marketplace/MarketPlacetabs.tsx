import { FiClipboard, FiCheckSquare } from "react-icons/fi";
import { MdOutlineFactCheck, MdOutlineReportProblem } from "react-icons/md";

export const MarketPlacetabs = [
  {
    id: "order-logs",
    label: "Order Logs",
    icon: <FiClipboard />,
    active: true,
  },
  {
    id: "product-audit-queue",
    label: "Product Audit Queue",
    icon: <MdOutlineFactCheck />,
  },
  // {
  //   id: "disputed-orders",
  //   label: "Disputed Orders",
  //   icon: <MdOutlineReportProblem />,
  // },
  {
    id: "product-approve-reject",
    label: "Product Approved / Rejected",
    icon: <FiCheckSquare />,
  },
];