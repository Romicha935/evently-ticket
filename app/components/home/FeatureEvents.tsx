import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/app/components/ui/Container";
import EventCard from "@/app/components/event/EventCard";
import { featuredEvents } from "@/app/event";

export default function FeaturedEvents() {
  const events = featuredEvents.slice(0, 4);

  return (
    <section className="relative border-b border-gray-100 bg-white py-16 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600">
              <Sparkles size={16} className="shrink-0" />
              <span>Handpicked for you</span>
            </div>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Events
            </h2>

            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Explore some of the most exciting events happening soon. Don't miss out on these top-rated experiences.
            </p>
          </div>

          {/* Action Link with Micro-interaction */}
          <Link
            href="/events"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-600 active:scale-95"
          >
            <span>View all events</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Event Grid */}
        {events.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          /* Empty State Fallback */
          <div className="mt-12 flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-8 text-center">
            <p className="text-sm font-medium text-gray-500">
              No featured events available at the moment.
            </p>
            <Link
              href="/events"
              className="mt-3 text-sm font-semibold text-violet-600 hover:underline"
            >
              Browse all upcoming events &rarr;
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}