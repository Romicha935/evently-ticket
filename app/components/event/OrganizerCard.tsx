import { Building2, Mail, ShieldCheck } from "lucide-react";

interface OrganizerCardProps {
  name: string;
  description: string;
}

export default function OrganizerCard({
  name,
  description,
}: OrganizerCardProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      <p className="text-sm font-semibold text-violet-600">
        Event organizer
      </p>

      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white">
          <Building2 size={25} />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-gray-900">
              {name}
            </h2>

            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
              <ShieldCheck size={13} />
              Verified
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-600">
            <Mail size={16} />
            <span>Contact organizer</span>
          </div>
        </div>
      </div>
    </section>
  );
}