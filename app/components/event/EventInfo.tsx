import { CalendarDays, Clock3, MapPin, Users } from "lucide-react";

interface EventInfoProps {
  title: string;
  description: string;
  category: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  availableSeats: number;
  price: number;
}

export default function EventInfo({
  title,
  description,
  category,
  date,
  startTime,
  endTime,
  location,
  availableSeats,
  price,
}: EventInfoProps) {
  return (
    <div>
      {/* Category */}
      <span className="inline-flex rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
        {category}
      </span>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
        {description}
      </p>

      {/* Event Meta */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <CalendarDays size={19} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Date</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {date}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <Clock3 size={19} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Time</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {startTime} — {endTime}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <MapPin size={19} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {location}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <Users size={19} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Availability</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {availableSeats} seats available
            </p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-8 border-t border-gray-100 pt-6">
        <p className="text-sm text-gray-500">Ticket price</p>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">
            ${price}
          </span>

          <span className="text-sm text-gray-500">/ person</span>
        </div>
      </div>
    </div>
  );
}