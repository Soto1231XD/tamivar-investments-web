"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeftRight,
  Building2,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Users,
  Wallet,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Capital", href: "/capital", icon: CircleDollarSign },
  { name: "Inversionistas", href: "/investors", icon: Users },
  { name: "Proyectos", href: "/projects", icon: Building2 },
  { name: "Movimientos", href: "/movements", icon: ArrowLeftRight },
  { name: "Reportes", href: "/reports", icon: FileText },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white lg:inset-x-auto lg:left-0 lg:top-0 lg:h-screen lg:w-72 lg:border-r lg:border-t-0">
      <div className="hidden h-20 items-center gap-3 border-b border-zinc-200 px-6 lg:flex">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white">
          <Wallet size={22} />
        </div>

        <div>
          <h1 className="text-base font-bold text-zinc-900">TAMIVAR</h1>
          <p className="text-sm text-zinc-500">Investments</p>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-2 py-2 lg:block lg:space-y-1 lg:overflow-visible lg:px-4 lg:py-6">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "flex min-w-20 flex-1 flex-col items-center justify-center gap-1 rounded-xl bg-zinc-900 px-3 py-2 text-xs font-medium text-white lg:min-w-0 lg:flex-row lg:justify-start lg:gap-3 lg:px-4 lg:py-3 lg:text-sm"
                  : "flex min-w-20 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 lg:min-w-0 lg:flex-row lg:justify-start lg:gap-3 lg:px-4 lg:py-3 lg:text-sm"
              }
            >
              <Icon size={20} />
              <span className="whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
