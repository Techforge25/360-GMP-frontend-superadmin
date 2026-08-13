import dynamic from "next/dynamic";

const RevenueGraph = dynamic(
  () => import("@/components/Dashboard/RevenueGraph"),
  {
    loading: () => (
      <div className="h-[350px] rounded-xl bg-white animate-pulse" />
    ),
  },
);

const SubscriptionGraph = dynamic(
  () => import("@/components/Dashboard/SubscriptionGraph"),
  {
    loading: () => (
      <div className="h-[350px] rounded-xl bg-white animate-pulse" />
    ),
  },
);

export default function Graphs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
      <RevenueGraph />
      <SubscriptionGraph />
    </div>
  );
}
