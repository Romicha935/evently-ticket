import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Ticket,
} from "lucide-react";

import { featuredEvents } from "@/app/event";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import EventInfo from "@/app/components/event/EventInfo";
import EventSchedule from "@/app/components/event/EventSchedule";
import OrganizerCard from "@/app/components/event/OrganizerCard";


interface EventDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
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

            <Link
              href="/events"
              className="mt-6 inline-block"
            >
              <Button variant="outline">
                <ArrowLeft
                  size={17}
                  className="mr-2"
                />
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

        {/* Main Event */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
          {/* Cover */}
          <div className="relative aspect-[16/7] bg-gray-100">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-violet-700 backdrop-blur">
                {event.category}
              </span>
            </div>
          </div>

          {/* Information */}
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_300px] lg:p-10">
            <EventInfo
              title={event.title}
              description={event.description}
              category={event.category}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
              location={event.location}
              availableSeats={event.availableSeats}
              totalSeats={event.totalSeats}
              price={event.price}
            />

            {/* Booking Card */}
            <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-24">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Ticket size={22} />
              </div>

              <h2 className="mt-5 text-lg font-semibold text-gray-900">
                Ready to join?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Choose your preferred seats and complete your
                booking.
              </p>

              <div className="mt-5 rounded-xl bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    From
                  </span>

                  <span className="text-xl font-bold text-gray-900">
                    ${event.price}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-sm text-gray-500">
                    Available
                  </span>

                  <span className="text-sm font-semibold text-green-600">
                    {event.availableSeats} seats
                  </span>
                </div>
              </div>

              <Link
                href={`/events/${event.id}/booking`}
                className="mt-6 block"
              >
                <Button
                  size="lg"
                  className="w-full"
                >
                  Book Tickets
                </Button>
              </Link>
            </aside>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-8">
          <EventSchedule
            date={event.date}
            startTime={event.startTime}
            endTime={event.endTime}
            location={event.location}
          />
        </div>

        {/* About */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold text-violet-600">
            About this event
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            What to expect
          </h2>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-gray-600">
            Join us for an unforgettable experience with
            exciting activities, talented people and a
            welcoming community. Whether you are attending
            to learn, connect or simply enjoy the experience,
            Evently makes it easy to discover and book your
            next event.
          </p>
        </section>

        {/* Organizer */}
        <div className="mt-8">
          <OrganizerCard
            name="Evently Experiences"
            description="A verified Evently organizer focused on creating memorable experiences and bringing communities together."
          />
        </div>
      </Container>
    </main>
  );
}