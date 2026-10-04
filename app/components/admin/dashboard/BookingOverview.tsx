const bookingData = [
  { month: "Apr", value: 45 },
  { month: "May", value: 65 },
  { month: "Jun", value: 52 },
  { month: "Jul", value: 78 },
  { month: "Aug", value: 60 },
  { month: "Sep", value: 88 },
  { month: "Oct", value: 72 },
];

export default function BookingOverview() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Booking Overview
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Booking activity over the last 7 months
          </p>
        </div>

        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 outline-none">
          <option>Last 7 months</option>
          <option>Last 30 days</option>
          <option>This year</option>
        </select>
      </div>

      <div className="mt-8 flex h-64 items-end gap-4 border-b border-gray-100 px-2">
        {bookingData.map((item) => (
          <div
            key={item.month}
            className="group flex h-full flex-1 items-end justify-center"
          >
            <div
              style={{ height: `${item.value}%` }}
              className="w-full max-w-12 rounded-t-lg bg-black transition-all group-hover:bg-gray-700"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-7 text-center text-xs text-gray-400">
        {bookingData.map((item) => (
          <span key={item.month}>{item.month}</span>
        ))}
      </div>
    </section>
  );
}