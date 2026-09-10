"use client";

import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  Ticket,
  Users,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import { featuredEvents } from "@/app/event";

interface BookingSuccessContentProps {
  bookingId: string;
  eventId: string;
  selectedSeats: string[];
}

export default function BookingSuccessContent({
  bookingId,
  eventId,
  selectedSeats,
}: BookingSuccessContentProps) {
  const event = featuredEvents.find((item) => item.id === eventId);

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Booking Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              We could not find the event associated with this booking.
            </p>

            <Link
              href="/events"
              className="mt-6 inline-flex rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Explore Events
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const totalAmount = event.price * selectedSeats.length;

  return (
    <main className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Success Header */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-9 w-9 text-green-600" />
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Booking Confirmed!
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-gray-500">
              Your tickets have been successfully booked. We hope you have a
              great experience at the event.
            </p>
          </div>

          {/* Booking Card */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Booking ID */}
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Booking ID
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {bookingId}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                  <Ticket className="h-5 w-5 text-violet-600" />
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="flex h-24 w-full items-center justify-center rounded-xl bg-gray-100 sm:w-36">
                  <Ticket className="h-10 w-10 text-gray-400" />
                </div>

                <div className="flex-1">
                  <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                    {event.category}
                  </span>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {event.title}
                  </h2>

                  <div className="mt-3 space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-violet-600" />
                      <span>
                        {event.date} · {event.startTime} - {event.endTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-violet-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    Seats
                  </div>

                  <p className="mt-2 font-semibold text-gray-900">
                    {selectedSeats.length > 0
                      ? selectedSeats.join(", ")
                      : "No seats selected"}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Total Amount</p>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    ${totalAmount}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/bookings"
                  className="flex-1 rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  View My Bookings
                </Link>

                <Link
                  href="/events"
                  className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  Explore More Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}