
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EventForm from "../../../components/admin/events/Eventform";


export default function NewEventPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/events"
          className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600"
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>

        <h1 className="text-2xl font-bold text-gray-900">
          Create New Event
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Fill in the details below to create an event.
        </p>
      </div>

      <EventForm />
    </div>
  );
}
