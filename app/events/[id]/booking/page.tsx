import Container from "@/app/components/ui/Container";
import BookingContent from "@/app/components/booking/BookingContent";
import { featuredEvents } from "@/app/event";

interface BookingPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingPage({
  params,
}: BookingPageProps) {
  const { id } = await params;

  const event = featuredEvents.find(
    (item) => item.id === id
  );

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Event Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              The event you are looking for does not exist.
            </p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <Container>
        <BookingContent
          eventId={event.id}
          eventTitle={event.title}
          ticketPrice={event.price}
          bookedSeats={[]}
        />
      </Container>
    </main>
  );
}