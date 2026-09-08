"use client";

import { useState } from "react";

import SeatMap from "./SeatMap";
import BookingSummary from "./BookingSummary";

interface BookingContentProps {
  eventId: string;
  eventTitle: string;
  ticketPrice: number;
  bookedSeats?: string[];
}

export default function BookingContent({
  eventId,
  eventTitle,
  ticketPrice,
  bookedSeats = [],
}: BookingContentProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium text-violet-600">
          {eventTitle}
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Select Your Seats
        </h1>

        <p className="mt-3 text-gray-500">
          Choose your preferred seats and continue to checkout.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <SeatMap
          bookedSeats={bookedSeats}
          selectedSeats={selectedSeats}
          onSelectionChange={setSelectedSeats}
        />

        <BookingSummary
          eventId={eventId}
          ticketPrice={ticketPrice}
          selectedSeats={selectedSeats}
        />
      </div>
    </div>
  );
}