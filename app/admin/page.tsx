
import BookingOverview from "@/components/admin/dashboard/BookingOverview";
import RecentBookings from "@/components/admin/dashboard/RecentBookings";
import RecentPayments from "@/components/admin/dashboard/RecentPayments";
import DashboardStats from "../components/admin/dashboard/DashboardStats";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Admin. Here&apos;s what&apos;s happening with Evently.
        </p>
      </div>

      <DashboardStats />

      <BookingOverview />

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <RecentBookings />
        <RecentPayments />
      </div>
    </div>
  );
}