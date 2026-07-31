import BackButtonMain from "@/components/common/BackButtonMain";
import EnterpriseMonitoringProfile from "@/components/subscription/paid-member/subscription-paid-view/EnterpriseMonitoringProfile";
import SubscriptionPlanDetails from "@/components/subscription/paid-member/subscription-paid-view/SubscriptionPlanDetails";

export default function page() {
  return (
    <div className="p-4">
      <BackButtonMain text="Back" />
      <EnterpriseMonitoringProfile />
      <SubscriptionPlanDetails/>
    </div>
  );
}
