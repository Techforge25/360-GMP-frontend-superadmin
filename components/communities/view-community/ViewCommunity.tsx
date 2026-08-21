import React from "react";
import CommunityHeader from "./CommunityHeader";
import CommunityCards from "./CommunityCards";
import CommunityMember from "./Comunnity-Member/CommunityMember";

export default function ViewCommunity() {
  const communityId = "1";
  return (
    <div className="">
      <div className="bg-[linear-gradient(135deg,#EFF6FF,#F0FDF5)] p-5 pt-3">
      <CommunityHeader communityId={communityId} />
      </div>
      <CommunityCards/>
      <CommunityMember/>
    </div>
  );
}
