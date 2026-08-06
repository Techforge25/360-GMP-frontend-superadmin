'use client'
import { useParams } from "next/navigation";
import BackButtonMain from "../common/BackButtonMain";
import EnterpriseMonitoringProfile from "./paid-member/subscription-paid-view/EnterpriseMonitoringProfile";
import SubscriptionPlanDetails from "./paid-member/subscription-paid-view/SubscriptionPlanDetails";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getSubscriptionUsersPaidDetails } from "@/services/subscription";

export default function SubscriptionDetailsComp() {
     const params = useParams()
     const { id } = params as { id: string };
     const { data, isPending } = useQuery({
          queryKey: [keys.subscriptionListPaidDetails, id],
          queryFn: () => getSubscriptionUsersPaidDetails(id),
          enabled: !!id,
          staleTime: 0
     });

     const paidUsersDataDetails = data?.data;
     // console.log(paidUserDNo User Profile

     return (
          <div className="p-4">
               <BackButtonMain text="Back" />
               <div className="mt-5">
                    <EnterpriseMonitoringProfile
                         isPending={isPending}
                         email={paidUsersDataDetails?.email || ""}
                         planName={paidUsersDataDetails?.subscription?.planName || ""}
                         lifetimeValue={paidUsersDataDetails?.lifetimeValue || 0}
                         joinDate={paidUsersDataDetails?.joinDate || ""}
                    />
               </div>
               <SubscriptionPlanDetails
                    startDate={paidUsersDataDetails?.subscription?.startDate || ""}
                    endDate={paidUsersDataDetails?.subscription?.endDate || ""}
                    planName={paidUsersDataDetails?.subscription?.planName || ""}
                    planPrice={paidUsersDataDetails?.subscription?.planPrice || 0}
                    lastPlane={paidUsersDataDetails?.lastSubscription || ""}
               />
          </div>
     )
}