'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-zinc-950 text-white">
      <h2 className="text-3xl font-sora font-bold text-red-500">Something went wrong!</h2>
      <p className="mt-4 text-zinc-400">We apologize for the inconvenience. An unexpected error occurred.</p>
      <button
        onClick={() => reset()}
        className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
