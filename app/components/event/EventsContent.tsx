"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import EventCard from "@/app/components/event/EventCard";
import type { EventData } from "@/app/event";

interface EventsContentProps {
  events: EventData[];
  searchParams: {
    search?: string;
    category?: string;
    location?: string;
    sort?: string;
    page?: string;
  };
}

const ITEMS_PER_PAGE = 6;

const categories = [
  "Music",
  "Technology",
  "Business",
  "Workshop",
  "Sports",
];

const locations = ["Dhaka", "Chattogram"];

export default function EventsContent({
  events,
  searchParams,
}: EventsContentProps) {
  const search = searchParams.search ?? "";
  const category = searchParams.category ?? "";
  const location = searchParams.location ?? "";
  const sort = searchParams.sort ?? "";
  const currentPage = Math.max(
    1,
    Number(searchParams.page ?? "1") || 1
  );

  const filteredEvents = useMemo(() => {
    const result = events.filter((event) => {
      const matchesSearch =
        !search ||
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        !category || event.category === category;

      const matchesLocation =
        !location ||
        event.location.toLowerCase().includes(location.toLowerCase());

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation
      );
    });

    return [...result].sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "seats") {
        return b.availableSeats - a.availableSeats;
      }

      return 0;
    });
  }, [events, search, category, location, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEvents.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedEvents = filteredEvents.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const hasFilters =
    search !== "" ||
    category !== "" ||
    location !== "" ||
    sort !== "";

  const buildUrl = (
    updates: Record<string, string | undefined>
  ) => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (location) params.set("location", location);
    if (sort) params.set("sort", sort);

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    const query = params.toString();

    return query ? `/events?${query}` : "/events";
  };

  return (
    <>
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-violet-600">
          Discover
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore Events
        </h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          Find concerts, conferences, workshops, sports and
          other exciting experiences.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Search */}
          <form
            action="/events"
            method="GET"
            className="flex flex-1"
          >
            {category && (
              <input
                type="hidden"
                name="category"
                value={category}
              />
            )}

            {location && (
              <input
                type="hidden"
                name="location"
                value={location}
              />
            )}

            {sort && (
              <input
                type="hidden"
                name="sort"
                value={sort}
              />
            )}

            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                name="search"
                defaultValue={search}
                placeholder="Search events..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <button
              type="submit"
              className="ml-2 hidden rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-700 sm:block"
            >
              Search
            </button>
          </form>

          {/* Sort */}
          <div className="relative lg:w-48">
            <SlidersHorizontal
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={sort}
              onChange={(e) => {
                window.location.href = buildUrl({
                  sort: e.target.value,
                  page: undefined,
                });
              }}
              className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none focus:border-violet-500"
            >
              <option value="">Sort by</option>
              <option value="price-low">
                Price: Low to High
              </option>
              <option value="price-high">
                Price: High to Low
              </option>
              <option value="seats">
                Most Available Seats
              </option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div className="mt-5 border-t border-gray-100 pt-5">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Category
            </span>

            <Link
              href={buildUrl({
                category: undefined,
                page: undefined,
              })}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                !category
                  ? "bg-violet-600 !text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </Link>

            {categories.map((item) => (
              <Link
                key={item}
                href={buildUrl({
                  category: item,
                  page: undefined,
                })}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "bg-violet-600 !text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
          <MapPin
            size={17}
            className="shrink-0 text-gray-400"
          />

          <Link
            href={buildUrl({
              location: undefined,
              page: undefined,
            })}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              !location
                ? "bg-gray-900 !text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Locations
          </Link>

          {locations.map((item) => (
            <Link
              key={item}
              href={buildUrl({
                location: item,
                page: undefined,
              })}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                location === item
                  ? "bg-gray-900 !text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Result Header */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredEvents.length}
            </span>{" "}
            {filteredEvents.length === 1 ? "event" : "events"}
          </p>
        </div>

        {hasFilters && (
          <Link
            href="/events"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-violet-600"
          >
            <X size={16} />
            Clear filters
          </Link>
        )}
      </div>

      {/* Events */}
      {paginatedEvents.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
          <CalendarDays
            size={40}
            className="mx-auto text-gray-300"
          />

          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            No events found
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            We could not find any events matching your
            current filters. Try changing your search or
            filters.
          </p>

          <Link
            href="/events"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-violet-700"
          >
            Browse All Events
          </Link>
        </div>
      )}

      {/* Pagination */}
      {filteredEvents.length > ITEMS_PER_PAGE && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <Link
            href={buildUrl({
              page:
                safePage > 1
                  ? String(safePage - 1)
                  : undefined,
            })}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${
              safePage === 1
                ? "pointer-events-none border-gray-100 text-gray-300"
                : "border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:text-violet-600"
            }`}
          >
            <ChevronLeft size={18} />
          </Link>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <Link
              key={page}
              href={buildUrl({
                page: String(page),
              })}
              className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
                safePage === page
                  ? "bg-violet-600 !text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:text-violet-600"
              }`}
            >
              {page}
            </Link>
          ))}

          <Link
            href={buildUrl({
              page:
                safePage < totalPages
                  ? String(safePage + 1)
                  : undefined,
            })}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${
              safePage === totalPages
                ? "pointer-events-none border-gray-100 text-gray-300"
                : "border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:text-violet-600"
            }`}
          >
            <ChevronRight size={18} />
          </Link>
        </div>
      )}
    </>
  );
}