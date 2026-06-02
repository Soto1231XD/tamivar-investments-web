import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppSidebar />

      <div className="min-h-screen overflow-x-hidden bg-zinc-50 pb-24 lg:pb-0 lg:pl-72">
        <AppHeader />

        <main className="px-4 py-6 sm:px-6 lg:p-8">{children}</main>
      </div>
    </>
  );
}
