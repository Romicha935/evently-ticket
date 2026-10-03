export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Admin. Here&apos;s what&apos;s happening with Evently.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            1,248
          </h2>
          <p className="mt-2 text-xs font-medium text-green-600">
            +12.5% this month
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Total Events</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            36
          </h2>
          <p className="mt-2 text-xs font-medium text-green-600">
            +4 new events
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Total Bookings</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            842
          </h2>
          <p className="mt-2 text-xs font-medium text-green-600">
            +8.1% this month
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            ৳1.24M
          </h2>
          <p className="mt-2 text-xs font-medium text-green-600">
            +15.3% this month
          </p>
        </div>
      </div>
    </div>
  );
}