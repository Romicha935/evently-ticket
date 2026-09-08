import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import EventCard from "@/app/components/event/EventCard";
import { featuredEvents } from "@/app/event";

export default function UpcomingEvents() {
  const upcomingEvents = featuredEvents.slice(0, 4);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-violet-600">
              Coming soon
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Plan ahead and reserve your spot at the events coming
              up next.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-violet-600"
          >
            Explore all
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </Container>
    </section>
  );
}