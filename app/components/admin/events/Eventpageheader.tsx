import Link from "next/link";
import { Plus } from "lucide-react";

export default function EventsPageHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Events
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your events, tickets, and event details.
        </p>
      </div>

      <Link
        href="/admin/events/new"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        <Plus size={18} />
        Add New Event
      </Link>
    </div>
  );
}