"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeftRight,
  Building2,
  CircleDollarSign,
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
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 border-r border-zinc-200 bg-white">
      <div className="flex h-20 items-center gap-3 border-b border-zinc-200 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white">
          <Wallet size={22} />
        </div>

        <div>
          <h1 className="text-base font-bold text-zinc-900">TAMIVAR</h1>
          <p className="text-sm text-zinc-500">Investments</p>
        </div>
      </div>

      <nav className="space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white"
                  : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              }
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}