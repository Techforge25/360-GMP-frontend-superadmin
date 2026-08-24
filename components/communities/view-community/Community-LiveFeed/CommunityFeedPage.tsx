import LiveFeed from "./LiveFeed";

interface Props {
  currentTab: string;
}

export default function CommunityFeedPage({currentTab}: Props) {
    
  return (
    <main className="min-h-screen bg-[#FFFFFF] ">
      <div className="">
        <LiveFeed />
      </div>
    </main>
  );
}
