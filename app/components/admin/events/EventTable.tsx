import Link from "next/link";
import { MoreHorizontal, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Dhaka Tech Conference 2026",
    category: "Technology",
    date: "Oct 15, 2026",
    location: "BICC, Dhaka",
    price: 1500,
    capacity: 500,
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Music Fest 2026",
    category: "Music",
    date: "Oct 18, 2026",
    location: "Army Stadium, Dhaka",
    price: 2000,
    capacity: 1200,
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Startup Meetup",
    category: "Business",
    date: "Oct 20, 2026",
    location: "Gulshan, Dhaka",
    price: 500,
    capacity: 250,
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Design Conference",
    category: "Design",
    date: "Sep 20, 2026",
    location: "Uttara, Dhaka",
    price: 1000,
    capacity: 300,
    status: "Completed",
  },
];

export default function EventsTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">
        <div>
          <h2 className="font-semibold text-gray-900">All Events</h2>
          <p className="mt-1 text-xs text-gray-500">
            Browse and manage your events.
          </p>
        </div>

        <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
          {events.length} events
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-gray-50">
            <tr className="text-xs text-gray-500">
              <th className="px-6 py-4 font-medium">Event</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Capacity</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {events.map((event) => (
              <tr key={event.id} className="transition hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-sm font-bold text-gray-600">
                      {event.title.charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        {event.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {event.category}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {event.date}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  ৳{event.price.toLocaleString("en-US")}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {event.capacity.toLocaleString("en-US")} seats
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      event.status === "Upcoming"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/events/${event.id}`}
                      className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      aria-label={`More actions for ${event.title}`}
                      className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 px-5 py-4 sm:px-6">
        <p className="text-xs text-gray-500">
          Showing 1–{events.length} of {events.length} events
        </p>

        <div className="flex gap-2">
          <button
            disabled
            className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}