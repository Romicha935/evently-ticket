"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function EventFilters() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center">
      <div className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-gray-200 px-3">
        <Search size={18} className="shrink-0 text-gray-400" />

        <input
          type="text"
          placeholder="Search events by title or location..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex gap-3">
        <select
          defaultValue="all"
          aria-label="Filter by event status"
          className="h-11 min-w-32 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none"
        >
          <option value="all">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>

        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 px-3 text-sm text-gray-600 hover:bg-gray-50"
        >
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </div>
  );
}