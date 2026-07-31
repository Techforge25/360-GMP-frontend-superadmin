'use client'
import CreateNewRole from "@/components/settings/CreateNewRole";
import { useParams } from "next/navigation";


function ViewAdmin() {
  const params = useParams();
  const { id } = params;
  return (
    <div className="min-h-screen  p-4 antialiased">
      <div className="mx-auto max-w-full">
        <CreateNewRole adminId={id} />
      </div>
    </div>
  );
}

export default ViewAdmin;
