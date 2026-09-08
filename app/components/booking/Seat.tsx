interface SeatProps {
  seatNumber: string;
  status: "available" | "selected" | "booked";
  onSelect?: (seatNumber: string) => void;
}

export default function Seat({
  seatNumber,
  status,
  onSelect,
}: SeatProps) {
  const isBooked = status === "booked";

  return (
    <button
      type="button"
      disabled={isBooked}
      onClick={() => onSelect?.(seatNumber)}
      aria-label={`Seat ${seatNumber}`}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-semibold transition-all duration-200 sm:h-11 sm:w-11 ${
        status === "selected"
          ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200"
          : status === "booked"
            ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
            : "border-gray-200 bg-white text-gray-700 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600"
      }`}
    >
      {seatNumber}
    </button>
  );
}