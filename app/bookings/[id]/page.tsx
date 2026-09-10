import BookingDetailsContent from "@/app/components/booking/BookingDetailsContent";

interface BookingDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookingDetailsPage({
  params,
}: BookingDetailsPageProps) {
  const { id } = await params;

  return <BookingDetailsContent bookingId={id} />;
}