import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Ticket } from "lucide-react";

import { featuredEvents } from "@/app/event";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import EventInfo from "@/app/components/event/EventInfo";



interface EventDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { id } = await params;

  const event = featuredEvents.find((item) => item.id === id);

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

            <Link href="/events" className="mt-6 inline-block">
              <Button variant="outline">
                <ArrowLeft size={17} className="mr-2" />
                Back to Events
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <Container>
        {/* Back */}
        <Link
          href="/events"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-violet-600"
        >
          <ArrowLeft size={17} />
          Back to Events
        </Link>

        {/* Event */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
          {/* Image */}
          <div className="relative aspect-[16/7] bg-gray-100">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_280px] lg:p-10">
            <EventInfo
              title={event.title}
              description="Join us for an unforgettable experience filled with amazing people, exciting activities and memorable moments."
              category={event.category}
              date={event.date}
              startTime="6:00 PM"
              endTime="10:00 PM"
              location={event.location}
              availableSeats={120}
              price={event.price}
            />

            {/* Booking */}
            <div className="h-fit rounded-2xl bg-gray-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Ticket size={22} />
              </div>

              <h2 className="mt-5 text-lg font-semibold text-gray-900">
                Ready to join?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Select your seats and complete your booking.
              </p>

              <Link
                href={`/events/${event.id}/booking`}
                className="mt-6 block"
              >
                <Button size="lg" className="w-full">
                  Book Tickets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}