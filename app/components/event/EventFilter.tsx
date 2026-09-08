"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface EventFiltersProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const categories = [
  "All",
  "Music",
  "Conference",
  "Workshop",
  "Business",
  "Sports",
];

export default function EventFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: EventFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search events..."
          className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
        />
      </div>

      {/* Categories */}
      <div className="flex items-center gap-3 overflow-x-auto pb-1">
        <SlidersHorizontal
          size={18}
          className="shrink-0 text-gray-500"
        />

        {categories.map((item) => {
          const value = item === "All" ? "" : item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(value)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === value
                  ? "bg-violet-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}