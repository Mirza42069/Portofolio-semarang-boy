import Link from "next/link";
import RootTemplate from "./(template)/template";

export default function NotFoundPage() {
  return (
    <RootTemplate>
      <main className="flex min-h-[calc(100dvh-115px)] flex-col items-center justify-center gap-4 p-8">
        <h1 className="font-bold text-4xl">404</h1>
        <p className="text-muted-foreground">Page not found</p>
        <Link
          href="/"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Go home
        </Link>
      </main>
    </RootTemplate>
  );
}
