import type { Metadata } from "next";
import "./globals.css";

import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";

export const metadata: Metadata = {
  title: "TAMIVAR Investments",
  description: "Sistema interno de gestión de inversiones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <AppSidebar />

        <div className="min-h-screen bg-zinc-50 pl-72">
          <AppHeader />

          <main className="p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}