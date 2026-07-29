import Header from "@/components/layouts/Header/Header";
import SideNavbar from "@/components/layouts/Sidenavbar/SideNavbar";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <SideNavbar />
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 overflow-y-auto ">{children}</main>
      </div>
    </div>
  );
}
