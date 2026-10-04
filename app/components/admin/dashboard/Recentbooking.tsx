import { MoreHorizontal } from "lucide-react";

const bookings = [
  {
    id: "#BK-1024",
    customer: "Rahim Ahmed",
    event: "Dhaka Tech Conference",
    amount: "৳4,500",
    status: "Confirmed",
  },
  {
    id: "#BK-1023",
    customer: "Nusrat Jahan",
    event: "Music Fest 2026",
    amount: "৳2,000",
    status: "Pending",
  },
  {
    id: "#BK-1022",
    customer: "Tanvir Hasan",
    event: "Startup Meetup",
    amount: "৳1,500",
    status: "Confirmed",
  },
  {
    id: "#BK-1021",
    customer: "Sadia Islam",
    event: "Design Conference",
    amount: "৳3,000",
    status: "Cancelled",
  },
];

export default function RecentBookings() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div>
          <h2 className="font-semibold text-gray-900">
            Recent Bookings
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Latest customer bookings
          </p>
        </div>

        <button className="text-sm font-medium text-gray-900 hover:underline">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-gray-100 text-xs text-gray-400">
              <th className="px-6 py-4 font-medium">Booking</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Event</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4" />
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {booking.id}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {booking.customer}
                </td>

                <td className="max-w-48 truncate px-6 py-4 text-sm text-gray-600">
                  {booking.event}
                </td>

                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {booking.amount}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={booking.status} />
                </td>

                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-900">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Confirmed: "bg-green-50 text-green-700",
    Pending: "bg-orange-50 text-orange-700",
    Cancelled: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}