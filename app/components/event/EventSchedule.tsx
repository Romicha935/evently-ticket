import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

interface EventScheduleProps {
  date: string;
  startTime: string;
  endTime: string;
  location: string;
}

export default function EventSchedule({
  date,
  startTime,
  endTime,
  location,
}: EventScheduleProps) {
  const schedule: ScheduleItem[] = [
    {
      time: "05:30 PM",
      title: "Doors Open",
      description: "Guests can arrive and find their seats.",
    },
    {
      time: startTime,
      title: "Event Starts",
      description: "The main event officially begins.",
    },
    {
      time: "08:00 PM",
      title: "Main Session",
      description: "Enjoy the main performances and activities.",
    },
    {
      time: endTime,
      title: "Event Ends",
      description: "The event comes to an end.",
    },
  ];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      <div>
        <p className="text-sm font-semibold text-violet-600">
          Event timeline
        </p>

        <h2 className="mt-1 text-xl font-bold text-gray-900">
          Schedule
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
          <CalendarDays
            size={19}
            className="shrink-0 text-violet-600"
          />

          <div>
            <p className="text-xs text-gray-500">Date</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
          <Clock3
            size={19}
            className="shrink-0 text-violet-600"
          />

          <div>
            <p className="text-xs text-gray-500">Time</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {startTime} — {endTime}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
          <MapPin
            size={19}
            className="shrink-0 text-violet-600"
          />

          <div>
            <p className="text-xs text-gray-500">Venue</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {schedule.map((item, index) => (
          <div
            key={item.title}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            {index !== schedule.length - 1 && (
              <div className="absolute left-[15px] top-8 h-full w-px bg-gray-200" />
            )}

            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
              <CheckCircle2 size={17} />
            </div>

            <div className="pt-0.5">
              <p className="text-xs font-semibold text-violet-600">
                {item.time}
              </p>

              <h3 className="mt-1 text-sm font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}