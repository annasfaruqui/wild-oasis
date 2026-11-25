import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SidebarProvider } from "@/components/layout/sidebar-provider";
import { UserSideNav } from "@/components/layout/user-side-nav";
import defaultUserAvatar from "@public/users/default-user.webp";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
        <UserSideNav />

        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardHeader
            userName="Eleanor Vance"
            userAvatar={defaultUserAvatar}
            profileHref="/me"
          />

          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
