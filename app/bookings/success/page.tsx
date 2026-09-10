import BookingSuccessContent from "@/app/components/booking/BookingSuccessContent";

interface BookingSuccessPageProps {
  searchParams: Promise<{
    bookingId?: string;
    eventId?: string;
    seats?: string;
  }>;
}

export default async function BookingSuccessPage({
  searchParams,
}: BookingSuccessPageProps) {
  const {
    bookingId = "",
    eventId = "",
    seats = "",
  } = await searchParams;

  const selectedSeats = seats
    ? seats.split(",").filter(Boolean)
    : [];

  return (
    <BookingSuccessContent
      bookingId={bookingId}
      eventId={eventId}
      selectedSeats={selectedSeats}
    />
  );
}