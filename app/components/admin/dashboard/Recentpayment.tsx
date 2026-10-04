const payments = [
  {
    id: "#PAY-501",
    customer: "Rahim Ahmed",
    amount: "৳4,500",
    method: "Online",
    status: "Paid",
  },
  {
    id: "#PAY-500",
    customer: "Nusrat Jahan",
    amount: "৳2,000",
    method: "Online",
    status: "Pending",
  },
  {
    id: "#PAY-499",
    customer: "Tanvir Hasan",
    amount: "৳1,500",
    method: "Online",
    status: "Paid",
  },
];

export default function RecentPayments() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div>
          <h2 className="font-semibold text-gray-900">
            Recent Payments
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Latest payment activity
          </p>
        </div>

        <button className="text-sm font-medium text-gray-900 hover:underline">
          View all
        </button>
      </div>

      <div className="divide-y divide-gray-100">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between px-6 py-5"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">
                {payment.customer}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {payment.id} · {payment.method}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                {payment.amount}
              </p>

              <p
                className={`mt-1 text-xs font-medium ${
                  payment.status === "Paid"
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {payment.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}