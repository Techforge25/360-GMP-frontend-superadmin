import dynamic from "next/dynamic";
import RevenueShimmer from "../skeleton/RevenueShimmer";
import SubscriptionShimmer from "../skeleton/SubscriptionShimmer";

const RevenueGraph = dynamic(
  () => import("@/components/Dashboard/RevenueGraph"),
  {
    loading: () => (
      <RevenueShimmer />
    ),
  },
);

const SubscriptionGraph = dynamic(
  () => import("@/components/Dashboard/SubscriptionGraph"),
  {
    loading: () => (
      <SubscriptionShimmer />
    ),
  },
);

export default function Graphs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <RevenueGraph />
      <SubscriptionGraph />
    </div>
  );
}
