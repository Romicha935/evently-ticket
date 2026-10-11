
"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EventForm from "../../../components/admin/events/Eventform";


const mockEvents = [
  {
    id: "1",
    title: "Tech Innovation Summit 2026",
    category: "Technology",
    location: "Dhaka, Bangladesh",
    date: "2026-11-15",
    time: "10:00",
    price: "1500",
    capacity: "500",
    description: "A summit for technology and innovation enthusiasts.",
    image: "",
  },
  {
    id: "2",
    title: "Music Festival 2026",
    category: "Music",
    location: "Uttara, Dhaka",
    date: "2026-12-20",
    time: "17:00",
    price: "800",
    capacity: "1000",
    description: "Enjoy live music and performances.",
    image: "",
  },
];

export default function EditEventPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const event = mockEvents.find((item) => item.id === params.id);

  if (!event) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
        <h1 className="text-xl font-semibold text-gray-900">
          Event not found
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          This event is not available in the demo data.
        </p>

        <button
          onClick={() => router.push("/admin/events")}
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm text-white"
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/events"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600"
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Edit Event
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Update the information for {event.title}.
        </p>
      </div>

      <EventForm
        initialData={event}
        submitLabel="Save Changes"
      />
    </div>
  );
}