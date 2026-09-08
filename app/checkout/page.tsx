import CheckoutContent from "../components/checkout/CheckoutContent";


interface CheckoutPageProps {
  searchParams: Promise<{
    eventId?: string;
    seats?: string;
  }>;
}

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const { eventId = "", seats = "" } = await searchParams;

  const selectedSeats = seats
    ? seats.split(",").filter(Boolean)
    : [];

  return (
    <CheckoutContent
      eventId={eventId}
      selectedSeats={selectedSeats}
    />
  );
}