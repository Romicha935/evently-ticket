import { CalendarDays, CircleDollarSign, Ticket } from "lucide-react";

const stats = [
  {
    title: "Total Events",
    value: "36",
    description: "All created events",
    icon: CalendarDays,
  },
  {
    title: "Upcoming Events",
    value: "18",
    description: "Scheduled to happen",
    icon: Ticket,
  },
  {
    title: "Total Capacity",
    value: "12,450",
    description: "Available event seats",
    icon: CircleDollarSign,
  },
];

export default function EventStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{stat.title}</p>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Icon size={19} className="text-gray-700" />
              </div>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              {stat.value}
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}