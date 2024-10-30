import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Next 15 Starter
        </h1>
        <div className="mx-auto">
          <div className="text-center text-lg">
            Starter template for Next.js 15 with React 19 RC, TypeScript,
            Tailwind CSS and Shadcn.
          </div>
        </div>
      </div>
    </main>
  );
}
