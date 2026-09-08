import EventCard, { EventCardProps } from "./EventCard";

interface EventGridProps {
  events: EventCardProps[];
}

export default function EventGrid({ events }: EventGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}