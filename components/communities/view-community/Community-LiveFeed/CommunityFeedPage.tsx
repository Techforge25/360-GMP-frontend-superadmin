import { ParamValue } from "next/dist/server/request/params";
import LiveFeed from "./LiveFeed";

interface Props {
  currentTab: string;
  communityId: ParamValue
}

export default function CommunityFeedPage({ currentTab, communityId }: Props) {

  return (
    <main className="min-h-screen bg-[#FFFFFF] ">
      <div className="">
        <LiveFeed communityId={communityId} />
      </div>
    </main>
  );
}
