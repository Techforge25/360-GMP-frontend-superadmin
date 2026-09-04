'use client';
import CommunityHeader from "./CommunityHeader";
import CommunityCards from "./CommunityCards";
import CommunityMember from "./Comunnity-Member/CommunityMember";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { getCommunityDetails } from "@/services/communities";
import { useParams } from "next/navigation";
import CommunityHeaderSkeleton from "@/components/skeleton/CommunityHeaderShimmer";

export default function ViewCommunity() {
  const { id } = useParams()
  const { data, isPending } = useQuery({
    queryKey: [keys.viewCommunityDetails, id],
    queryFn: () => getCommunityDetails(id),
    staleTime: 0
  });

  const communityData = data?.data

  return (
    <div className="">
      <div className="bg-[linear-gradient(135deg,#EFF6FF,#F0FDF5)] p-5 pt-3">
        {isPending ? (
          <CommunityHeaderSkeleton />
        ) : (
          <CommunityHeader profileImage={communityData?.profileImage} category={communityData?.category} name={communityData?.name} purpose={communityData?.purpose} description={communityData?.description} status={communityData?.status} type={communityData?.type} createdAt={communityData?.createdAt} members={communityData?.membersCount} communityId={id} warnings={communityData?.warningsCount} />
        )}
      </div>
      <CommunityCards ownerName={communityData?.creator?.ownerName} logo={communityData?.creator?.logo} createdAt={communityData?.creator?.createdAt} description={communityData?.description} isPending={isPending}  purpose={communityData?.purpose} rules={communityData?.rules}/>
      <CommunityMember communityId={id} />
    </div>
  );
}
