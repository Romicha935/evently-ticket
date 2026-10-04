import {
  CalendarDays,
  CreditCard,
  Ticket,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,248",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Total Events",
    value: "36",
    change: "+4 new",
    icon: CalendarDays,
  },
  {
    title: "Total Bookings",
    value: "842",
    change: "+8.1%",
    icon: Ticket,
  },
  {
    title: "Total Revenue",
    value: "৳1.24M",
    change: "+15.3%",
    icon: CreditCard,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                <Icon size={20} className="text-gray-700" />
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-green-600">
              {stat.change}{" "}
              <span className="font-normal text-gray-400">
                from last month
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}