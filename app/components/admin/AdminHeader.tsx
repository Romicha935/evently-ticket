"use client";

import { Bell, Search, Menu } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
      {/* Mobile menu */}
      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 lg:hidden">
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="hidden w-full max-w-md md:block">
        <div className="flex h-10 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-3">
        {/* Notification */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:bg-gray-50">
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Admin profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            A
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">
              Admin
            </p>

            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}