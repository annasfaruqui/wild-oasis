import defaultUserAvatar from "@public/users/default-user.webp";
import { AdminSideNav } from "@/components/layout/admin-side-nav";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SidebarProvider } from "@/components/layout/sidebar-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
        <AdminSideNav />

        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardHeader
            userName="Jonas Schmedtmann"
            userSubtitle="Administrator"
            userAvatar={defaultUserAvatar}
            profileHref="/admin/me"
          />

          {/* Main Admin Content */}
          <main className="min-w-0 flex-1 p-6 sm:p-8 lg:p-10">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
