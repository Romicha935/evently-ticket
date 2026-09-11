import { Inbox } from "lucide-react";
import { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  action?: ReactNode;
}

export default function EmptyState({
  title = "Nothing here yet",
  message = "There is no content to display right now.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
        <Inbox size={24} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-1 max-w-md text-sm leading-6 text-gray-500">
        {message}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}