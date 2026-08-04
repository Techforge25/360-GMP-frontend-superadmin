import Header from "@/components/layouts/Header/Header";
import SideNavbar from "@/components/layouts/Sidenavbar/SideNavbar";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <aside className="h-screen shrink-0">
        <SideNavbar />
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="shrink-0">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto p-0">{children}</main>
      </div>
    </div>
  );
}
