import Link from "next/link";
import { ArrowRight, Ticket } from "lucide-react";

import Button from "@/app/components/ui/Button";

interface BookingSummaryProps {
  eventId: string;
  ticketPrice: number;
  selectedSeats: string[];
}

export default function BookingSummary({
  eventId,
  ticketPrice,
  selectedSeats,
}: BookingSummaryProps) {
  const total = ticketPrice * selectedSeats.length;

  const checkoutUrl =
    selectedSeats.length > 0
      ? `/checkout?eventId=${eventId}&seats=${selectedSeats.join(",")}`
      : "#";

  return (
    <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:top-24">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        <Ticket size={22} />
      </div>

      <h2 className="mt-5 text-lg font-semibold text-gray-900">
        Booking Summary
      </h2>

      {selectedSeats.length === 0 ? (
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Select your preferred seats to continue.
        </p>
      ) : (
        <>
          <div className="mt-5">
            <p className="text-xs font-medium text-gray-500">
              Selected Seats
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <span
                  key={seat}
                  className="rounded-lg bg-violet-50 px-3 py-1.5 text-sm font-semibold text-violet-700"
                >
                  {seat}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Tickets ({selectedSeats.length})
              </span>

              <span className="font-medium text-gray-900">
                ${ticketPrice} × {selectedSeats.length}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="font-semibold text-gray-900">Total</span>

              <span className="text-xl font-bold text-gray-900">
                ${total}
              </span>
            </div>
          </div>
        </>
      )}

      <Link
        href={checkoutUrl}
        className={`mt-6 block ${
          selectedSeats.length === 0 ? "pointer-events-none" : ""
        }`}
      >
        <Button
          size="lg"
          className="w-full"
          disabled={selectedSeats.length === 0}
        >
          Continue to Checkout
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}