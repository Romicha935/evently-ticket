import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

interface EventInfoProps {
  title: string;
  description: string;
  category: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  availableSeats: number;
  totalSeats: number;
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
  totalSeats,
  price,
}: EventInfoProps) {
  const availabilityPercentage =
    totalSeats > 0
      ? Math.round((availableSeats / totalSeats) * 100)
      : 0;

  return (
    <div>
      <span className="inline-flex rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
        {category}
      </span>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <InfoItem
          icon={<CalendarDays size={19} />}
          label="Date"
          value={date}
        />

        <InfoItem
          icon={<Clock3 size={19} />}
          label="Time"
          value={`${startTime} — ${endTime}`}
        />

        <InfoItem
          icon={<MapPin size={19} />}
          label="Location"
          value={location}
        />

        <InfoItem
          icon={<Users size={19} />}
          label="Availability"
          value={`${availableSeats} seats available`}
        />
      </div>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">
              Ticket price
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                ${price}
              </span>

              <span className="text-sm text-gray-500">
                / person
              </span>
            </div>
          </div>

          <p className="text-sm font-medium text-gray-500">
            {availabilityPercentage}% available
          </p>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-violet-600 transition-all"
            style={{
              width: `${availabilityPercentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoItem({
  icon,
  label,
  value,
}: InfoItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>

        <p className="mt-1 text-sm font-medium text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}