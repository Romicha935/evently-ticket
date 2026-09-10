"use client";

import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Ticket,
  Users,
  ArrowRight,
} from "lucide-react";

interface Booking {
  id: string;
  eventTitle: string;
  category: string;
  date: string;
  location: string;
  seats: string[];
  totalAmount: number;
  status: "Confirmed" | "Pending" | "Cancelled";
}

const bookings: Booking[] = [
  {
    id: "EVT-82943120",
    eventTitle: "Summer Music Festival 2026",
    category: "Music",
    date: "Sep 20, 2026",
    location: "Dhaka, Bangladesh",
    seats: ["A3", "A4"],
    totalAmount: 50,
    status: "Confirmed",
  },
  {
    id: "EVT-63821475",
    eventTitle: "Future Tech Conference",
    category: "Technology",
    date: "Sep 28, 2026",
    location: "Dhaka, Bangladesh",
    seats: ["B5"],
    totalAmount: 40,
    status: "Confirmed",
  },
];

export default function MyBookingsContent() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-violet-600">
            Your tickets
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Bookings
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            View and manage all your event bookings in one place.
          </p>
        </div>

        {/* Booking List */}
        <div className="mt-10 space-y-5">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Event */}
                  <div className="flex gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                      <Ticket className="h-7 w-7 text-violet-600" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                          {booking.category}
                        </span>

                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                          {booking.status}
                        </span>
                      </div>

                      <h2 className="mt-2 text-lg font-bold text-gray-900">
                        {booking.eventTitle}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Booking ID: {booking.id}
                      </p>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="lg:text-right">
                    <p className="text-sm text-gray-500">Total paid</p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      ${booking.totalAmount}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-violet-600" />

                    <div>
                      <p className="text-xs text-gray-400">Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {booking.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-violet-600" />

                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm font-medium text-gray-900">
                        {booking.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-violet-600" />

                    <div>
                      <p className="text-xs text-gray-400">Seats</p>
                      <p className="text-sm font-medium text-gray-900">
                        {booking.seats.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="mt-5 flex justify-end border-t border-gray-100 pt-5">
                  <Link
                    href={`/bookings/${booking.id}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State fallback */}
        {bookings.length === 0 && (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
            <Ticket className="mx-auto h-10 w-10 text-gray-300" />

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              No bookings yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Start exploring events and book your first ticket.
            </p>

            <Link
              href="/events"
              className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Explore Events
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}