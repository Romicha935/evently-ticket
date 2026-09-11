import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <Loader2 className="h-8 w-8 animate-spin text-violet-600" />

      <p className="mt-4 text-sm font-medium text-gray-700">{message}</p>

      <p className="mt-1 text-xs text-gray-400">
        Please wait a moment.
      </p>
    </div>
  );
}