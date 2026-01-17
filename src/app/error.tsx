"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[calc(100dvh-115px)] flex-col items-center justify-center gap-4 p-8">
      <h1 className="font-bold text-4xl">Something went wrong</h1>
      <p className="text-muted-foreground">An unexpected error occurred.</p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Try again
        </button>
        <Link
          href="/"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
