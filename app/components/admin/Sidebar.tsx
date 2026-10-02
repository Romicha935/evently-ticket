"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  CreditCard,
  Users,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const menuGroups = [
  {
    title: "MAIN",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "EVENT MANAGEMENT",
    items: [
      {
        label: "Events",
        href: "/admin/events",
        icon: CalendarDays,
      },
    ],
  },
  {
    title: "BOOKING MANAGEMENT",
    items: [
      {
        label: "Bookings",
        href: "/admin/bookings",
        icon: Ticket,
      },
      {
        label: "Payments",
        href: "/admin/payments",
        icon: CreditCard,
      },
      {
        label: "Tickets",
        href: "/admin/tickets",
        icon: Ticket,
      },
    ],
  },
  {
    title: "USER MANAGEMENT",
    items: [
      {
        label: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        label: "Notifications",
        href: "/admin/notifications",
        icon: Bell,
      },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Evently
          </h1>
          <p className="mt-0.5 text-xs text-gray-400">Admin Panel</p>
        </div>

        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50">
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-7">
            <p className="mb-2 px-3 text-[10px] font-semibold tracking-wider text-gray-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                const active =
                  pathname === item.href ||
                  (item.href !== "/admin" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-black text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-gray-100 p-4">
        <Link
          href="/settings"
          className="mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          <Settings size={18} />
          Settings
        </Link>

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}