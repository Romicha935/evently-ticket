
"use client";

import { Search, SlidersHorizontal } from "lucide-react";

type EventFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
};

export default function EventFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: EventFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search events..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="min-w-40 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
        >
          <option value="All">All Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          type="button"
          onClick={() => {
            onSearchChange("");
            onStatusChange("All");
          }}
          className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50"
        >
          <SlidersHorizontal size={16} />
          Reset
        </button>
      </div>
    </div>
  );
}
