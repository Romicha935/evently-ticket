import SeatMap from "@/app/components/booking/SeatMap";


export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Select Your Seats
        </h1>

        <p className="mb-8 text-gray-500">
          Choose your preferred seats for this event.
        </p>

        <SeatMap
          bookedSeats={["A2", "A3", "B5", "C1", "D7"]}
        />
      </div>
    </main>
  );
}