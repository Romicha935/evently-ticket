import PaymentContent from "../components/payment/PaymentContent";


interface PaymentPageProps {
  searchParams: Promise<{
    eventId?: string;
    seats?: string;
  }>;
}

export default async function PaymentPage({
  searchParams,
}: PaymentPageProps) {
  const { eventId = "", seats = "" } = await searchParams;

  const selectedSeats = seats
    ? seats.split(",").filter(Boolean)
    : [];

  return (
    <PaymentContent
      eventId={eventId}
      selectedSeats={selectedSeats}
    />
  );
}