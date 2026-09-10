"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  MapPin,
  QrCode,
  Ticket,
  Users,
} from "lucide-react";

import { featuredEvents } from "@/app/event";

interface BookingDetailsContentProps {
  bookingId: string;
}

const bookingData = {
  "EVT-82943120": {
    eventId: "summer-music-festival",
    seats: ["A3", "A4"],
    totalAmount: 50,
    paymentStatus: "Paid",
  },
  "EVT-63821475": {
    eventId: "future-tech-conference",
    seats: ["B5"],
    totalAmount: 40,
    paymentStatus: "Paid",
  },
};

export default function BookingDetailsContent({
  bookingId,
}: BookingDetailsContentProps) {
  const booking =
    bookingData[bookingId as keyof typeof bookingData];

  if (!booking) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <Ticket className="mx-auto h-12 w-12 text-gray-300" />

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Booking Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            We could not find the booking you are looking for.
          </p>

          <Link
            href="/bookings"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Back to My Bookings
          </Link>
        </div>
      </main>
    );
  }

  const event = featuredEvents.find(
    (item) => item.id === booking.eventId
  );

  if (!event) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/bookings"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to My Bookings
        </Link>

        {/* Header */}
        <div className="mt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-violet-600">
                Booking Details
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                {event.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              Confirmed
            </div>
          </div>
        </div>

        {/* Ticket */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Ticket Header */}
          <div className="border-b border-dashed border-gray-300 bg-gray-50 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Booking ID
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {bookingId}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
                <Ticket className="h-5 w-5 text-violet-600" />
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {/* Event */}
            <div>
              <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                {event.category}
              </span>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                {event.title}
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                {event.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="mt-8 grid gap-4 border-t border-gray-200 pt-7 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4">
                <CalendarDays className="h-5 w-5 text-violet-600" />

                <p className="mt-3 text-xs text-gray-400">
                  Event Date
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {event.date}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <Clock3 className="h-5 w-5 text-violet-600" />

                <p className="mt-3 text-xs text-gray-400">
                  Event Time
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {event.startTime} - {event.endTime}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <MapPin className="h-5 w-5 text-violet-600" />

                <p className="mt-3 text-xs text-gray-400">
                  Location
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {event.location}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <Users className="h-5 w-5 text-violet-600" />

                <p className="mt-3 text-xs text-gray-400">
                  Selected Seats
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {booking.seats.join(", ")}
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-8 flex flex-col gap-4 rounded-xl border border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Payment Status
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />

                  <span className="font-semibold text-green-700">
                    {booking.paymentStatus}
                  </span>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-sm text-gray-500">
                  Total Amount
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  ${booking.totalAmount}
                </p>
              </div>
            </div>

            {/* QR Ticket */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100">
                  <QrCode className="h-9 w-9 text-gray-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Your Ticket QR Code
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  Show this QR code at the event entrance to verify
                  your ticket.
                </p>
              </div>

              {/* Temporary QR placeholder */}
              <div className="mx-auto mt-6 flex h-48 w-48 items-center justify-center border-8 border-gray-900 bg-white">
                <div className="grid grid-cols-5 gap-1 p-3">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-5 w-5 ${
                        [0, 1, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 23, 24]
                          .includes(index)
                          ? "bg-gray-900"
                          : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-gray-400">
                Ticket verification code: {bookingId}
              </p>
            </div>

            {/* Download */}
            <div className="mt-8 flex justify-center border-t border-gray-200 pt-7">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                <Download className="h-4 w-4" />
                Print / Save Ticket
              </button>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 p-4 text-sm text-violet-800">
          Keep your booking ID and QR code available when you arrive
          at the event venue.
        </div>
      </div>
    </main>
  );
}