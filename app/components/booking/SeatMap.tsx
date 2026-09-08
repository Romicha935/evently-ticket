"use client";

import Seat from "./Seat";

interface SeatMapProps {
  bookedSeats?: string[];
  selectedSeats: string[];
  onSelectionChange: (seats: string[]) => void;
}

const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const seatsPerRow = 8;

export default function SeatMap({
  bookedSeats = [],
  selectedSeats,
  onSelectionChange,
}: SeatMapProps) {
  const handleSeatSelect = (seatNumber: string) => {
    if (bookedSeats.includes(seatNumber)) return;

    const isSelected = selectedSeats.includes(seatNumber);

    const updatedSeats = isSelected
      ? selectedSeats.filter((seat) => seat !== seatNumber)
      : [...selectedSeats, seatNumber];

    onSelectionChange(updatedSeats);
  };

  const getSeatStatus = (
    seatNumber: string
  ): "available" | "selected" | "booked" => {
    if (bookedSeats.includes(seatNumber)) return "booked";

    if (selectedSeats.includes(seatNumber)) return "selected";

    return "available";
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8">
      <div className="mb-10">
        <div className="mx-auto max-w-md rounded-lg bg-gray-900 py-3 text-center text-sm font-medium text-white">
          Stage
        </div>

        <div className="mx-auto mt-2 h-1 max-w-sm rounded-full bg-violet-500" />
      </div>

      <div className="space-y-4 overflow-x-auto">
        {rows.map((row) => (
          <div
            key={row}
            className="flex min-w-max items-center justify-center gap-2 sm:gap-3"
          >
            <span className="mr-2 w-5 text-center text-xs font-semibold text-gray-400">
              {row}
            </span>

            {Array.from({ length: seatsPerRow }, (_, index) => {
              const seatNumber = `${row}${index + 1}`;

              return (
                <Seat
                  key={seatNumber}
                  seatNumber={seatNumber}
                  status={getSeatStatus(seatNumber)}
                  onSelect={handleSeatSelect}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-5 border-t border-gray-100 pt-6">
        <Legend
          className="border border-gray-300 bg-white"
          label="Available"
        />

        <Legend
          className="border border-violet-600 bg-violet-600"
          label="Selected"
        />

        <Legend
          className="border border-gray-200 bg-gray-100"
          label="Booked"
        />
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        {selectedSeats.length === 0
          ? "Select your seats"
          : `${selectedSeats.length} seat${
              selectedSeats.length > 1 ? "s" : ""
            } selected`}
      </div>
    </div>
  );
}

interface LegendProps {
  className: string;
  label: string;
}

function Legend({ className, label }: LegendProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-4 w-4 rounded ${className}`} />
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}